import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Course from "../pages/Course";
import Courses from "../pages/Courses";
import Profile from "../pages/Profile";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

function MainMenu(props: any) {

  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >


      <Tab.Screen 
        name="Profile" 
        component={Profile}         
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Courses" component={Courses} 
        options={{
          tabBarLabel: 'Courses',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-variant" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
})

export default MainMenu;
