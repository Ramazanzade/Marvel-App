import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../../../Onboarding/Onboarding';

const Stack = createNativeStackNavigator();
const OnboardingScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
             <Stack.Screen name="Onboarding" component={Onboarding} />
   </Stack.Navigator>
  )
}
export default  OnboardingScreen
