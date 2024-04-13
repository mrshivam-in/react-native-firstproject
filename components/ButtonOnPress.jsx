import React from 'react';
import {Text, View, Button} from 'react-native';

const ButtonOnPress = () => {
  const sayHello = val => {
    console.warn(val);
  };
  const sayBye = () => {
    console.warn('Bye Bye');
  };
  return (
    <View>
      <Text style={{margin: 25}}>

        <Button
          title="Auto Function Called"
          onPress={sayHello('Hi, Good Morning')}
        />

        <Button title="OnPress Function Called" onPress={sayBye}/>

        <Button title="OnPress Value Function Called" onPress={() => sayHello("Bye, User!")} />
      </Text>
    </View>
  );
};

export default ButtonOnPress;
