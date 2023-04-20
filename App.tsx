import { StatusBar, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/navigation/Stack/SplashStack/SplashScreen';
import HomeScreen from './src/navigation/Stack/HomeStack/HomeScreen';
import OnboardingScreen from './src/navigation/Stack/OnboardingStack/OnboardingScreen';
import LoginRegisterScreen from './src/navigation/Stack/Login-RegisterStack/LoginRegisterScreen';
import PlansScreen from './src/navigation/Stack/PlansStack/PlansScreen';
import ProfileScreen from './src/navigation/Stack/ProfileStack/ProfileScreen';
import Tabbar from './src/navigation/Tab/Tabbar';
const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen}/> */}
        {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
        <Stack.Screen name="LoginRegisterScreen" component={LoginRegisterScreen}/>
        <Stack.Screen name="PlansScreen" component={PlansScreen}/> */}
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen}/> */}
        {/* <Stack.Screen name="Tabbar" component={Tabbar}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App