import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Course from '../Components/Course';
import CourseDeleted from '../Components/CourseDeleted';
import Setting from '../Components/Setting';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePageDelete from '../homeDelete/HomePageDelete';


const BottomTabNavigator = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <BottomTabNavigator.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'black',
                tabBarLabelStyle: {
                    fontSize: 16,
                }
            }}
        >
            <BottomTabNavigator.Screen
                name='Home'
                component={Course}
                options={{
                    title: 'Trang chủ',
                    tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome5 name='home' size={size} color={color} />
                    ),
                }}
                 
            />

            <BottomTabNavigator.Screen
                name='Course Deleted'
                component={HomePageDelete}
                options={{
                    title: 'Đã xoá',
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons name='delete' size={size} color={color} />
                    )
                }}
            />
            <BottomTabNavigator.Screen
                name='Setting'
                component={Setting}
                options={{
                    title: 'cài đặt',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name='settings' size={size} color={color} />
                    )
                }}
            />
        </BottomTabNavigator.Navigator>
    )
}

export default BottomTab



