import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const ComponentDidUnmount = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 25}}>UseEffect Unmount Component</Text>

      <Button
        style={{fontSize: 20}}
        title="Toggle"
        onPress={() => setShow(!show)}
      />
      {show ? <Student /> : null}
    </View>
  );
};

const Student = () => {
  let timer = setInterval(() => {
    console.warn('Time Called');
  }, 2000);

  useEffect(() => {
    return () => clearInterval(timer);
  });

  //     useEffect(() => {
  //         return () => {
  //           console.warn('useEffect called on unmount');
  //         };
  //   });

  return (
    <View>
      <Text style={{fontSize: 25}}> Student</Text>
    </View>
  );
};

export default ComponentDidUnmount;
