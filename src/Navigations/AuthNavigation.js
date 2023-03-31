import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Screens/LoginSignUp/Login/Login';
import SignUp from './LoginSignup_Navigation/SignUp_Navigation';
import ForgotPassword from './LoginSignup_Navigation/ForgotPassword_Navigation';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})