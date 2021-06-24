import 'react-native-gesture-handler';
 import React from 'react';
 import {
   StyleSheet,
   useColorScheme,
 } from 'react-native';

 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';
import Courses from './pages/Courses';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Course from './pages/Course';

const Stack = createStackNavigator();

 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';

   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Course" component={Course} />
      </Stack.Navigator>
    </NavigationContainer>
   )
 };

 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });

 export default App;
