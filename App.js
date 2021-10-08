import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import ChildCourse from './Components/ChildCourse'
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/MainStackNavigator'
export default function App() {

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
      <MainStackNavigator/>

        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#f3e5f5',
    // backgroundColor:"#afc2cb"
  },


});
