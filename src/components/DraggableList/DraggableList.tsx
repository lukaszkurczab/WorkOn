import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, runOnJS } from 'react-native-reanimated';

type Item = {
  id: number;
  content: string;
};

type DraggableListProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  onDragEnd: (newData: T[]) => void;
};

export const DraggableList = <T,>({ data, renderItem, onDragEnd }: DraggableListProps<T>) => {
  const [items, setItems] = useState(data);
  const [itemsDifference, setItemsDifference] = useState(0);
  const itemHeights = useRef<{ [key: number]: number }>({});
  const dragIndex = useSharedValue(-1);
  const translateY = useSharedValue(0);

  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    translateY.value = event.nativeEvent.translationY + itemsDifference;
    if (dragIndex.value !== -1) {
      const currentIndex = dragIndex.value;
      const prevIndex = currentIndex - 1;
      const nextIndex = currentIndex + 1;
      if (prevIndex >= 0 && translateY.value < -0.5 * itemHeights.current[prevIndex]) {
        runOnJS(swapItems)(currentIndex, prevIndex);
        dragIndex.value = prevIndex;
        translateY.value = 0;
        setItemsDifference(itemsDifference + itemHeights.current[prevIndex]);
      } else if (nextIndex < items.length && translateY.value > 0.5 * itemHeights.current[nextIndex]) {
        runOnJS(swapItems)(currentIndex, nextIndex);
        dragIndex.value = nextIndex;
        translateY.value = 0;
        setItemsDifference(itemsDifference - itemHeights.current[nextIndex]);
      }
    }
  };

  const swapItems = (fromIndex: number, toIndex: number) => {
    const newItems = [...items];
    const [movedItem] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, movedItem);
    setItems(newItems);
  };

  const onGestureEnd = () => {
    runOnJS(onDragEnd)(items);
    dragIndex.value = -1;
    translateY.value = 0;
    setItemsDifference(0);
  };

  const measureItem = (index: number, height: number) => {
    itemHeights.current[index] = height;
  };

  return (
    <View>
      {items.map((item, index) => {
        const animatedStyle = useAnimatedStyle(() => ({
          transform: [{ translateY: dragIndex.value === index ? translateY.value : 0 }],
          zIndex: dragIndex.value === index ? 1 : 0,
        }));

        return (
          <PanGestureHandler
            key={index}
            onGestureEvent={onGestureEvent}
            onEnded={onGestureEnd}
            onBegan={() => {
              dragIndex.value = index;
            }}
          >
            <Animated.View
              style={animatedStyle}
              onLayout={event => measureItem(index, event.nativeEvent.layout.height)}
            >
              {renderItem(item, index)}
            </Animated.View>
          </PanGestureHandler>
        );
      })}
    </View>
  );
};
