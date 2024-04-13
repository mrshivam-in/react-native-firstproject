import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const HideShow =()=>{
    const [show, setShow] =useState(false);
    return(
        <View>
            <Text style={{fontSize :25 }}>Show/Hide Components</Text>
            <Button style={{ fontSize : 20}} title ="Press to Hide" onPress={()=>setShow(true)}/>
            <Button style={{ fontSize : 20}} title ="Press to Show" onPress={()=>setShow(false)}/>

            <Button style={{ fontSize : 20}} title ="Toggle Components" onPress={()=>setShow(!show)}/>
        {
            show ? <User/> :null
        }
        </View>
    );
};

const User=()=>{

    return(
        <View>
            <Text style={{fontSize : 25}}> User Component</Text>
        </View>
    );
};

export default HideShow;


