import { StatusBar, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/navigation/Stack/SplashStack/SplashScreen';
import HomeScreen from './src/navigation/Stack/HomeStack/HomeScreen';
import OnboardingScreen from './src/navigation/Stack/OnboardingStack/OnboardingScreen';
import LoginRegisterScreen from './src/navigation/Stack/Login-RegisterStack/LoginRegisterScreen';
const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen}/> */}
        {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/> */}
        <Stack.Screen name="LoginRegisterScreen" component={LoginRegisterScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App