import React, {useState} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';

const LearnForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const resetFormData = () => {
    setDisplay(false);
    setPassword('');
    setEmail('');
    setName('');
  };
  return (
    <View>
      <Text style={{fontSize: 25}}>Simple Form in React Native </Text>
      <TextInput
        style={styles.inputText}
        placeholder="Enter Your User Name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Enter Your Email Name"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Enter Your Password Name"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
      <View style={{marginBottom:15}}>
        <Button
          color={'green'}
          title="Print Details"
          onPress={() => setDisplay(true)}
        />
      </View>
      <Button title="Clear Details" onPress={resetFormData} />
      <View style={{marginBottom:15}}>
        {display ? (
          <View style={{marginBottom:15}}>
            <Text style={{fontSize: 20}}>User Name is : {name}</Text>
            <Text style={{fontSize: 20}}>User Email is : {email}</Text>
            <Text style={{fontSize: 20}}>User Password is : {password}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    fontSize: 20,
    margin: 10,
    color: 'red',
    borderWidth: 3,
    borderColor: 'black',
  },
});

export default LearnForm;
