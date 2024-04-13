import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TouchOpacity = () => {
  return (
    <View style={styles.main}>
      <TouchableOpacity>
        <Text style={[styles.button, styles.success]}>Button</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[styles.button, styles.warning]}>Warning</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[styles.button, styles.error]}>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    backgroundColor: '#bbb',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'read',
    elevation: 10,
    shadowOpacity: 1,
  },
  success: {
    backgroundColor: 'blue',
  },
  primary: {
    backgroundColor: 'green',
  },
  warning: {
    backgroundColor: 'red',
  },
  error: {
    backgroundColor: 'yellow',
    color: 'black',
  },
});

export default TouchOpacity;
