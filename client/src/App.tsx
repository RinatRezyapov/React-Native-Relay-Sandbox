import 'react-native-gesture-handler';
 import React from 'react';
 import { useColorScheme } from 'react-native';

import Courses from './pages/Courses';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Course from './pages/Course';

const Stack = createStackNavigator();

 const App = () => {
   return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Course" component={Course} />
      </Stack.Navigator>
    </NavigationContainer>
   )
 };

 export default App;
