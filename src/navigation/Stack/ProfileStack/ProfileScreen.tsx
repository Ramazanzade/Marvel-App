import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilePage1 from '../../../Profil/ProfilePage1';
import ProfilPage2 from '../../../Profil/ProfilPage2';
import ProfilePage3 from '../../../Profil/ProfilePage3';
import ProfilePage4 from '../../../Profil/ProfilePage4';
import ProfilePage5 from '../../../Profil/ProfilePage5';
const Stack = createNativeStackNavigator();
const ProfileScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="ProfilePage1" component={ProfilePage1} />
    <Stack.Screen name="ProfilPage2" component={ProfilPage2} />
    <Stack.Screen name="ProfilePage3" component={ProfilePage3} />
    {/* <Stack.Screen name="ProfilePage4" component={ProfilePage4} /> */}
    <Stack.Screen name="ProfilePage5" component={ProfilePage5} />
</Stack.Navigator>
  )
}

export default ProfileScreen