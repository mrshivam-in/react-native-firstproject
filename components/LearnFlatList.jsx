import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList
} from 'react-native';

const LearnFlatList = () => {
  const users = [
    {
      id: 1,
      name: 'Shivam',
    },
    {
      id: 2,
      name: 'Anurag',
    },
    {
      id: 3,
      name: 'Sanvi',
    },
    {
      id: 4,
      name: 'Ananya',
    },
    {
      id: 5,
      name: 'Vidya',
    },
    {
      id: 6,
      name: 'MS Dhoni',
    },
    {
      id: 7,
      name: 'Dubey',
    },
    {
      id: 8,
      name: 'Singh',
    },
    {
      id: 9,
      name: 'Kushwaha',
    },
  ];
  return (
    <FlatList
    data={users}
    renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
    keyExtractor={item=>item.id}
    />
  )
};

const styles =StyleSheet.create({
    item:{
    fontSize:20,
    padding:10,
    color: "white",
    backgroundColor:"red",
    borderColor:"black",
    borderWidth:2,
    margin:10
    }
})

export default LearnFlatList;
