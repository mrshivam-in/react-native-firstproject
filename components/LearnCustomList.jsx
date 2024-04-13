import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  ScrollView
} from 'react-native';

const LearnCustomList = () => {
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
    <ScrollView style={{marginBottom: 50}}>
        {
            users.map((item)=><Text style={styles.item}>{item.name}</Text>)
        }
    </ScrollView>
    
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

export default LearnCustomList;