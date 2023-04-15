import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilePage1 from '../../../Profil/ProfilePage1';
import ProfilPage2 from '../../../Profil/ProfilPage2';
const Stack = createNativeStackNavigator();
const ProfileScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="ProfilePage1" component={ProfilePage1} />
    <Stack.Screen name="ProfilPage2" component={ProfilPage2} />
</Stack.Navigator>
  )
}

export default ProfileScreen