import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Download from '../../../Home/Download';
import DownloadHome from '../../../Download/DownloadHome';

const Stack = createNativeStackNavigator();

const DownloadScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
             <Stack.Screen name="DownloadHome" component={DownloadHome} />
   </Stack.Navigator>
  )
}

export default DownloadScreen