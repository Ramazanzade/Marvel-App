import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DownloadScreen2 from '../Stack/DownloadStack2/DownloadScreen2';
import WatchlistScreen from '../Stack/WatchlistStack/WatchlistScreen';

const Tab = createMaterialTopTabNavigator();

const Tabbartop = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="DownloadScreen2" component={DownloadScreen2} />
    <Tab.Screen name="WatchlistScreen" component={WatchlistScreen} />
  </Tab.Navigator>
  )
}

export default Tabbartop