import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Course from '../Components/Course';
import Screens2 from '../Components/Screens2';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Details" component={Screens2}/>
            <Stack.Screen name="Home" component={Course}/>

        </Stack.Navigator>
    )
}

export default MainStackNavigator
