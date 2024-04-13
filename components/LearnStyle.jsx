import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

const LearnStyle = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          color: 'white',
          backgroundColor: 'blue',
          borderColor: 'black',
          borderWidth: 2,
          marginBottom: 10,
          padding: 10,
          textAlign:"center",
          textAlignVertical: "center",
          height:100,
          borderRadius:25,
    
        }}>
        STYLE IN REACT NATIVE
      </Text>
      <Text style={styles.baseText}>Ahmedabad</Text>
      <Text style={styles.baseText}>Varanasi</Text>
      <Text style={styles.baseText}>Nagpur</Text>
      <Text style={styles.baseText}>Mandla</Text>
    </View>
  );
};


export default LearnStyle;
