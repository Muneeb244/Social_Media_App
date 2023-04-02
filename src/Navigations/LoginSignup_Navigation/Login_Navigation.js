import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../Screens/LoginSignUp/Login/Login';
import ForgotPassword_Navigation from './ForgotPassword_Navigation';

const Stack = createNativeStackNavigator();

const Login_Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword_Navigation" component={ForgotPassword_Navigation} />
    </Stack.Navigator>
    // <Text>HEre I am login</Text>
  )
}

export default Login_Navigation

const styles = StyleSheet.create({})