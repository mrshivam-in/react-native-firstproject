import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const LearnUseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(10);

  useEffect(() => {
    console.warn(count);
  }, [count]);

  return (
    <View>
      <Text style={{fontSize: 15}}>{data}Life Cycel with Use Effect {count}</Text>
      <Button title="UpdateCount" onPress={() => setCount(count + 1)} />
      <Button title="UpdateData" onPress={() => setData(data + 1)} />
    </View>
  );
};

export default LearnUseEffect;
