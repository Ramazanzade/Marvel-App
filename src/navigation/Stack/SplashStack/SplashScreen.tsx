import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../../Splash/Splash';

const Stack = createNativeStackNavigator();
const SplashScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
             <Stack.Screen name="Splash" component={Splash} />
   </Stack.Navigator>
  )
}

export default SplashScreen