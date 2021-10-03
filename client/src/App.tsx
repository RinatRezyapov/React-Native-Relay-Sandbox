import 'react-native-gesture-handler';
 import React from 'react';
 import { Provider as PaperProvider } from "react-native-paper";

import Courses from './pages/Courses';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Course from './pages/Course';
import MainMenu from './components/MainMenu';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

 const App = () => {
   return (
    <PaperProvider>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainMenu" component={MainMenu}/>
          <Stack.Screen name="Course" component={Course}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
   )
 };

 export default App;
