import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const LearnTextInput = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 25}}>Handle Text Input</Text>
      <Text style={{fontSize: 25}}>Your Name is :{name}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Clear Input Value" onPress={()=>setName('')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 15,
    borderWidth: 2,
    borderColor: 'red',
    margin: 10,
    color: 'red',
  },
});

export default LearnTextInput;
