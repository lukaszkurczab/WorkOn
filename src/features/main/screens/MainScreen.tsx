import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { navigate } from '../../../utility/navigate';
import Layout from '../../../components/Layout/Layout';

const MainScreen = () => {
  return (
    <Layout>
      <View>
        <Text style={{ color: 'white' }}>Main screen</Text>
      </View>
    </Layout>
  );
};

export default MainScreen;
