import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DownloadScreen2 from '../Stack/DownloadStack2/DownloadScreen2';
import WatchlistScreen from '../Stack/WatchlistStack/WatchlistScreen';

const Tab = createMaterialTopTabNavigator();

const Tabbartop = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarLabelStyle: { fontSize: 15 },
        tabBarStyle: { backgroundColor: 'black' },
      }}
    >
      <Tab.Screen name="Download" component={DownloadScreen2} />
      <Tab.Screen name="Watchlist" component={WatchlistScreen} />
    </Tab.Navigator>
  )
}

export default Tabbartop;
