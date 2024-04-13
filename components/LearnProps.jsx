import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const LearnProps = () => {
    const [user, setUser] = useState("Shivam")
  return (
    <View>
      <Text style = {{fontSize : 20}}>Props In React Native</Text>
      <Button title ="Update Props" onPress={()=>setUser("Anurag")}/>
      <User name={user} age={29}/>
    </View>
  );
};

const User = (props) => {
    return (
      <View style={{backgroundColor:'#125789', padding:5}}>
        <Text style = {{fontSize : 20, backgroundColor:'#125789', padding : 10}}>User Name:{props.name}</Text>
        <Text style = {{fontSize : 20, backgroundColor:'#125789', padding : 10}}>Updated User Name : {props.age}</Text>
      </View>
    );
  };

export default LearnProps;
