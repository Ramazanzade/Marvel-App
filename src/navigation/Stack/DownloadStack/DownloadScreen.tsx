import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Download from '../../../Download/Download';

const Stack = createNativeStackNavigator();

const DownloadScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
             <Stack.Screen name="Download" component={Download} />
   </Stack.Navigator>
  )
}

export default DownloadScreen