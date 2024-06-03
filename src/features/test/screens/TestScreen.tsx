import React, { useState } from 'react';
import Layout from '../../../components/Layout/Layout';
import { TextInput } from '../../../components/TextInput/TextInput';

const TestScreen: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <Layout>
      <TextInput value={value} onChangeText={setValue} />
    </Layout>
  );
};

export default TestScreen;
