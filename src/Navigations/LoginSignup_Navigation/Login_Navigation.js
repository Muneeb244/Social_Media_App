import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../Screens/LoginSignUp/Login/Login';
import ForgotPassword_Navigation from './ForgotPassword_Navigation';
import HomePage from '../../Screens/MainPage/HomePage';
import SignUp_Navigation from './SignUp_Navigation';
import Forgot_EnterEmail from '../../Screens/LoginSignUp/ForgotPassword/Forgot_EnterEmail';
import Forgot_EnterVerificationCode from '../../Screens/LoginSignUp/ForgotPassword/Forgot_EnterVerificationCode';
import Forgot_EnterNewPassword from '../../Screens/LoginSignUp/ForgotPassword/Forgot_EnterNewPassword';
import Forgot_Success from '../../Screens/LoginSignUp/ForgotPassword/Forgot_Success';

const Stack = createNativeStackNavigator();

const Login_Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot_EnterEmail" component={Forgot_EnterEmail} />
        <Stack.Screen name="Forgot_EnterVerificationCode" component={Forgot_EnterVerificationCode} />
        <Stack.Screen name="Forgot_EnterNewPassword" component={Forgot_EnterNewPassword} />
        <Stack.Screen name="Forgot_Success" component={Forgot_Success} />
        <Stack.Screen name="SignUp_Navigation" component={SignUp_Navigation} />
        <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  )
}

export default Login_Navigation

const styles = StyleSheet.create({})