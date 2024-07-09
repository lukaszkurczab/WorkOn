import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../../../components/Typography/Typography';
import { gray } from '../../../../styles/colors';
import { useFormatTime } from '../../../../utility/hooks';
import styles from './HistoryItem.styles';
import { HistoryItem as HistoryItemType } from '../../../../types/history';
type HistoryItemProps = {
  historyItem: HistoryItemType;
};

const HistoryItem = ({ historyItem }: HistoryItemProps) => {
  return (
    <View style={styles.container}>
      <Typography variant="h3">
        {historyItem.plan} - {historyItem.day}
      </Typography>
      <Typography variant="h4" style={{ color: gray }}>
        {historyItem.exercises.length} exercises · {useFormatTime(historyItem.time / 1000)}
      </Typography>
    </View>
  );
};

export default HistoryItem;
