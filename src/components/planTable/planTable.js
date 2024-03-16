import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import styles from './planTable.styles';

const tableHead = ['Exercise', 'Series', 'Rep', 'Weight'];

const PlanTable = ({ exercises }) => {
  const [tableData, setTableData] = useState([]);
  const exercisesList = useSelector(state => state.exercises.data);

  useEffect(() => {
    newTable = [];
    exercises.map(exercise => {
      const exerciseData = exercisesList.find(item => item.id === exercise.id);
      newTable.push([exerciseData.name, exercise.series.length, exercise.series[0].reps, exercise.series[0].weight]);
    });
    setTableData(newTable);
  }, []);
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: 'white' }}>
        <Row data={tableHead} flexArr={[2, 1, 1, 1]} style={styles.head} textStyle={styles.headText} />
        <TableWrapper style={styles.wrapper}>
          <Rows data={tableData} flexArr={[2, 1, 1, 1]} style={styles.row} textStyle={styles.rowText} />
        </TableWrapper>
      </Table>
    </View>
  );
};

export default PlanTable;
