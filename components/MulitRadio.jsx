

import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const MultiRadio = () => {
  const skill = [
    {
      id: 1,
      name: 'Java',
    },
    {
      id: 2,
      name: 'C++',
    },
    {
      id: 3,
      name: 'Python',
    },
    {
      id: 4,
      name: 'SQL',
    },
    {
      id: 5,
      name: 'JavaScript',
    },
  ];
  const [selectedRadio, setSelectedRadio] = useState(1);

  return (
    <View style={styles.main}>
      {skill.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadio === item.id ? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>Radio 1</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'skyblue',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioText: {
    fontSize: 20,
    color: 'skyblue',
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: 'skyblue',
    height: 28,
    widht: 28,
    margin: 4,
    borderRadius: 20,
  },
});

export default MultiRadio;
