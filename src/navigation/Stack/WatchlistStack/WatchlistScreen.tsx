import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Watchlist from '../../../Download/Watchlist';


const Stack = createNativeStackNavigator();

const WatchlistScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
             <Stack.Screen name="Watchlist" component={Watchlist} />
   </Stack.Navigator>
  )
}

export default WatchlistScreen