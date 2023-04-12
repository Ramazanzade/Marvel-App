import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../../Login-Register/Login/Login';
import Singup from '../../../Login-Register/Singup/Singup';

const Stack = createNativeStackNavigator();
const LoginRegisterScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            {/* <Stack.Screen name="Login" component={Login} /> */}
            <Stack.Screen name="Singup" component={Singup} />
        </Stack.Navigator>
    )
}
export default LoginRegisterScreen
