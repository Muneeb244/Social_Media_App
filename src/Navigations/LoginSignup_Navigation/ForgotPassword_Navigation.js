import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Forgot_EnterEmail from '../../Screens/LoginSignUp/ForgotPassword/Forgot_EnterEmail';
import Forgot_EnterVerificationCode from '../../Screens/LoginSignUp/ForgotPassword/Forgot_EnterVerificationCode';
import Forgot_EnterNewPassword from '../../Screens/LoginSignUp/ForgotPassword/Forgot_EnterNewPassword';
import Forgot_Success from '../../Screens/LoginSignUp/ForgotPassword/Forgot_Success';

// import Login_Navigation from './Login_Navigation';

const Stack = createNativeStackNavigator();

const ForgotPassword_Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="Forgot_EnterEmail" component={Forgot_EnterEmail} />
        <Stack.Screen name="Forgot_EnterVerificationCode" component={Forgot_EnterVerificationCode} />
        <Stack.Screen name="Forgot_EnterNewPassword" component={Forgot_EnterNewPassword} />
        <Stack.Screen name="Forgot_Success" component={Forgot_Success} />
        {/* <Stack.Screen name="Login_Navigation" component={Login_Navigation} /> */}
    </Stack.Navigator>
  )
}

export default ForgotPassword_Navigation

const styles = StyleSheet.create({})