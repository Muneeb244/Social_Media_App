import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Forgot_EnterEmail from '../Screens/ForgotPassword/Forgot_EnterEmail';
import Forgot_EnterVericationCode from '../Screens/ForgotPassword/Forgot_EnterVericationCode';
import Forgot_EnterNewPassword from '../Screens/ForgotPassword/Forgot_EnterNewPassword';
import Forgot_Success from '../Screens/ForgotPassword/Forgot_Success';


const Stack = createNativeStackNavigator();

const ForgotPassword_Navigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Forgot_EnterEmail" component={Forgot_EnterEmail} />
        <Stack.Screen name="Forgot_EnterVericationCode" component={Forgot_EnterVericationCode} />
        <Stack.Screen name="Forgot_EnterNewPassword" component={Forgot_EnterNewPassword} />
        <Stack.Screen name="Forgot_Success" component={Forgot_Success} />
    </Stack.Navigator>
  )
}

export default ForgotPassword_Navigation

const styles = StyleSheet.create({})