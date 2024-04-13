import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const ComponentDidUpdate = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(10);
  
    // useEffect(() => {
    //   console.warn("do some aanimation");
    // }, [count]);

    // useEffect(() => {
    //     console.warn("call api");
    //   }, [data]);
  
    return (
      <View>
        <Text style={{fontSize: 15}}>{data}Life Cycel with Use Effect {count}</Text>
        <Button title="Update Count" onPress={() => setCount(count + 1)} />
        <Button title="Update Data" onPress={() => setData(data + 1)} />
        <User info ={{data, count}}/>
      </View>
    );
  };

  const User =(props)=>{
    useEffect(()=>{
        console.warn('run this code when data prop is update')
    }, [props.info.data])

    useEffect(()=>{
        console.warn('run this code when count prop is update')
    }, [props.info.count])
    return(
        <View>
            <Text style={{fontSize :30, color: 'orange'}}>data:{props.info.data}</Text>
            <Text style={{fontSize :30, color: 'orange'}}>data:{props.info.count}</Text>
        </View>
    );
  };
    

export default ComponentDidUpdate;
