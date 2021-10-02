import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import Course from './Components/Course';
import ChildCourse from './Components/ChildCourse'

export default function App() {

  return (
    <SafeAreaView style={styles.container}>

        <Course />
        <StatusBar style="auto" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },


});
