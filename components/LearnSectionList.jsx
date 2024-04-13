import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const LearnSectionList = () => {
  const users = [
    {
      username: 'Shivam',
      data: ['Python', 'C++', 'C'],
    },
    {
      username: 'Vidya',
      data: ['Js', 'React', 'Nextjs'],
    },
    {
      username: 'Sanvi',
      data: ['Ruby', 'TypeScript', 'DSA'],
    },
    {
      username: 'Anurag',
      data: ['Go', 'Bun', 'Deno', 'Mono'],
    },
  ];
  return (
    <View>
      <SectionList
        sections={users}
        renderItem={({item}) => (
          <Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>
        )}
        renderSectionHeader={({section: {username}}) => (
          <Text style={{fontSize: 25, color: 'red'}}>{username}</Text>
        )}
      />
    </View>
  );
};

export default LearnSectionList;
