import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import ChildCourse from './Components/ChildCourse'
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/MainStackNavigator'
import BottomTab from './navigation/BottomTab';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {

  return (
    <NavigationContainer>
    <Provider store={store}>

      <SafeAreaView style={styles.container}>

      {/* <MainStackNavigator/> */}
      <BottomTab/>

        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>

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
