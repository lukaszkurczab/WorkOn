import React from 'react';
import { View, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import styles from './planTable.styles';

const tableHead = ['Exercise', 'Series', 'Rep', 'Weight']
const tableData = [
        ['Push up', '3', '12', '0kg'],
        ['Squat', '3', '8', '90kg'],
        ['Bench press', '3', '6', '60kg'],
        ['RDL', '3', '8', '80kg']
      ]

const PlanTable = () => {
  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 1, borderColor: 'white'}}>
        <Row data={tableHead} flexArr={[2, 1, 1, 1]} style={styles.head} textStyle={styles.headText}/>
        <TableWrapper style={styles.wrapper}>
          <Rows data={tableData} flexArr={[2, 1, 1, 1]} style={styles.row} textStyle={styles.rowText} />
        </TableWrapper>
      </Table>
    </View>
  )
};

export default PlanTable;