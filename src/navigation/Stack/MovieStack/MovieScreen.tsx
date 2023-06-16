import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movies from '../../../Categories/Movies';
const Stack = createNativeStackNavigator();
const MovieScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name="Movies" component={Movies} />
</Stack.Navigator>
  )
}

export default MovieScreen