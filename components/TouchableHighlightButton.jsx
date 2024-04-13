import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const TouchableHighlightButton = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.error]}>Button</Text>
      </TouchableHighlight>
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

export default TouchableHighlightButton;
