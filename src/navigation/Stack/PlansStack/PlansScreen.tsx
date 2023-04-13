import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PalnsPage1 from '../../../Plans/PalnsPage1';
import PlansPage2 from '../../../Plans/PlansPage2';
import PlansPage3 from '../../../Plans/PlansPage3';
import PlansPage4 from '../../../Plans/PlansPage4';
const Stack = createNativeStackNavigator();
const PlansScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="PalnsPage1" component={PalnsPage1} />
    <Stack.Screen name="PlansPage2" component={PlansPage2} />
    <Stack.Screen name="PlansPage3" component={PlansPage3} />
    <Stack.Screen name="PlansPage4" component={PlansPage4} />
</Stack.Navigator>
  )
}

export default PlansScreen