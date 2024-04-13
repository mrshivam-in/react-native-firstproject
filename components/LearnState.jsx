import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';


const LearnState = () => {
    const [name, setName] = useState("Anurag") 

    function testName() {
        setName("Shivam")
    }

    return(
    <View>
        <Text style={{fontSize : 20}}>State Management </Text>
        <Text style={{fontSize : 20}}> {name} </Text>
        <Button title= "Update Name" onPress={testName}/>
    </View>
    )
};

export default LearnState;