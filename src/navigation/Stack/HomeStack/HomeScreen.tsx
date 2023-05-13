import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../../Home/Home';
import Download from '../../../Home/Download';

const Stack = createNativeStackNavigator();
const HomeScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
             <Stack.Screen name="Home" component={Home} />
             <Stack.Screen name="Download" component={Download} />
   </Stack.Navigator>
  )
}
export default  HomeScreen
