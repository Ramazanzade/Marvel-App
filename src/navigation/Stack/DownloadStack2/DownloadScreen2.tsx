import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Download from '../../../Home/Download';
import DownloadHome from '../../../Download/DownloadHome';
import Download2 from '../../../Download/Download2';

const Stack = createNativeStackNavigator();

const DownloadScreen2 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
             <Stack.Screen name="Download2" component={Download2} />
   </Stack.Navigator>
  )
}

export default DownloadScreen2