import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Series from '../../../Categories/Series';
const Stack = createNativeStackNavigator();
const SerisScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name="Series" component={Series} />
</Stack.Navigator>
  )
}

export default SerisScreen