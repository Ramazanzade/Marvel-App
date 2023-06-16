import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieScreen from '../Stack/MovieStack/MovieScreen';
import SerisScreen from '../Stack/SeriesStack/SerisScreen';

const Tab = createMaterialTopTabNavigator();
const TabbartopCategories = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 15 },
        tabBarStyle: { backgroundColor: 'black' },
        // tabBarScrollEnabled:true
      }}
    >
      <Tab.Screen name="MovieScreen"  component={MovieScreen} />
      <Tab.Screen name="SerisScreen"  component={SerisScreen} />
    </Tab.Navigator>
  )
}

export default TabbartopCategories