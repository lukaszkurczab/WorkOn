import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './HistoryTile.styles';
import { Typography } from '../Typography/Typography';
import { gray } from '../../styles/colors';
import { HistoryItem } from '../../types/history';
import { useFormatDate } from '../../utility/hooks';

type HistoryItemType = {
  historyItem: HistoryItem;
  handlePreview: (historyItem: HistoryItem) => void;
};

const HistoryTile = ({ historyItem, handlePreview }: HistoryItemType) => {
  return (
    <TouchableOpacity onPress={() => handlePreview(historyItem)} style={styles.historyItem} key={historyItem.id}>
      <Typography variant="h3">
        {historyItem.plan} - {historyItem.day}
      </Typography>
      <Typography variant="h4" style={{ color: gray }}>
        {historyItem.exercises.length} exercises · {useFormatDate(historyItem.date)}
      </Typography>
    </TouchableOpacity>
  );
};

export default HistoryTile;
