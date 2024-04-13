import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';

const LearnDynamicGrid = () => {
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

<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
{
    users.map((item)=><Text style={styles.item}>{key=item.name}</Text>)
}

{/* //Custome Grid  */}
      {/* <Text style={styles.item}>Shivam</Text>
      <Text style={styles.item}>Anurag</Text>
      <Text style={styles.item}>Sanvi</Text>
      <Text style={styles.item}>Shanu</Text>
      <Text style={styles.item}>Mate</Text>
      <Text style={styles.item}>Papa</Text>
      <Text style={styles.item}>Vidya</Text>
      <Text style={styles.item}>Sanvi</Text>
      <Text style={styles.item}>Shanu</Text>
      <Text style={styles.item}>Mate</Text>
      <Text style={styles.item}>Papa</Text>
      <Text style={styles.item}>Vidya</Text>
      <Text style={styles.item}>Mate</Text>
      <Text style={styles.item}>Papa</Text>
      <Text style={styles.item}>Vidya</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    backgroundColor: 'blue',
    color: '#fff',
    margin: 5,
    padding: 5,
    height: 120,
    width: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default LearnDynamicGrid;
