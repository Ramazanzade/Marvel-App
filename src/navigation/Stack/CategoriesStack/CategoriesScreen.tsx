import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesHome from '../../../Categories/CategoriesHome';
const Stack = createNativeStackNavigator();


const CategoriesScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name="CategoriesHome" component={CategoriesHome} />
</Stack.Navigator>
  )
}

export default CategoriesScreen