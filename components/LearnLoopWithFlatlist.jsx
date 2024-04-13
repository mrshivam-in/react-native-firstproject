import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
} from 'react-native';

const LearnLoopWithFlatlist = () => {
  const users = [
    {
      name: 'Shivam',
      email: 'shivam@gmail.com',
    },
    {
      name: 'Sanvi',
      email: 'sanvi@gmail.com',
    },
    {
      name: 'Vidya',
      email: 'vidya@gmail.com',
    },
  ];
  return (
    <View>
      <FlatList data={users} renderItem={({item}) => <UserData item={item} />} />
    </View>
  );
};

const UserData = (props) => {
    const item= props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    color: 'orange',
    flex: 1,
    margin: 2,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default LearnLoopWithFlatlist;
