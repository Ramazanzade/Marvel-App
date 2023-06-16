import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoreHome from '../../../More/MoreHome/MoreHome';
import Account from '../../../More/Account/Account';
import Chat from '../../../More/Chat/Chat';
import Language from '../../../More/Language/Language';
const Stack = createNativeStackNavigator();
const MoreScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name="MoreHome" component={MoreHome} />
    <Stack.Screen name="Account" component={Account} />
    <Stack.Screen name="Chat" component={Chat} />
    <Stack.Screen name="Language" component={Language} />
</Stack.Navigator>
  )
}

export default MoreScreen