import React from 'react';
import { View, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import Button from '../../../../components/Button/Button';
import styles from './SelectCreatorTypeItem.styles';

type SelectCreatorTypeItemProps = {
  title: string;
  desc: string;
  buttonText: string;
  onSelect: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
};

const SelectCreatorTypeItem: React.FC<SelectCreatorTypeItemProps> = ({
  title,
  desc,
  buttonText,
  onSelect,
  style,
  textStyle,
  buttonTextStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View>
        <Typography variant="h2" style={[styles.text, textStyle]}>
          {title}
        </Typography>
        <Typography variant="h4" style={[styles.text, textStyle]}>
          {desc}
        </Typography>
      </View>
      <Button onPress={onSelect}>
        <Typography variant="h2" style={[styles.buttonText, buttonTextStyle]}>
          {buttonText}
        </Typography>
      </Button>
    </View>
  );
};

export default SelectCreatorTypeItem;
