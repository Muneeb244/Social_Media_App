import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../Screens/LoginSignUp/Login/Login';
import ForgotPassword_Navigation from './ForgotPassword_Navigation';
import HomePage from '../../Screens/MainPage/HomePage';

const Stack = createNativeStackNavigator();

const Login_Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword_Navigation" component={ForgotPassword_Navigation} />
        <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
    // <Text>HEre I am login</Text>
  )
}

export default Login_Navigation

const styles = StyleSheet.create({})