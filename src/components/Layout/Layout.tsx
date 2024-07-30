import React, { ReactNode, useEffect, useState } from 'react';
import { Dimensions, KeyboardAvoidingView, Keyboard, Platform, ScrollView, View, StatusBar } from 'react-native';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.styles';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showNavigation?: boolean;
  headerText?: string;
}

const useKeyboardVisibility = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return isKeyboardVisible;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  showHeader = true,
  showNavigation = true,
  headerText = 'WorkOn',
}) => {
  const isKeyboardVisible = useKeyboardVisibility();
  const insets = useSafeAreaInsets();

  const headerHeight = showHeader ? 107 : 0;
  const navigationHeight = showNavigation ? 40 : 0;
  const bodyHeight =
    Dimensions.get('window').height -
    headerHeight -
    navigationHeight -
    (Platform.OS === 'ios' ? insets.top - insets.bottom : StatusBar.currentHeight!) -
    64;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          scrollEnabled={isKeyboardVisible}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
          nestedScrollEnabled={true}
        >
          {showHeader && <Header text={headerText} />}
          <View style={[styles.body, { height: bodyHeight }]}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
      {showNavigation && <Navigation />}
    </SafeAreaView>
  );
};

export default Layout;
