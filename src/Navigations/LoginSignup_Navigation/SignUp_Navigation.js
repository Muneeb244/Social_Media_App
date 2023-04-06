import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp_EnterEmail from '../../Screens/LoginSignUp/SignUp/SignUp_EnterEmail';
import SignUp_EnterVerificationCode from '../../Screens/LoginSignUp/SignUp/SignUp_EnterVerificationCode';
import SignUp_EnterPassword from '../../Screens/LoginSignUp/SignUp/SignUp_EnterPassword';
import SignUp_ChooseUserName from '../../Screens/LoginSignUp/SignUp/SignUp_ChooseUserName';
import SignUp_Success from '../../Screens/LoginSignUp/SignUp/SignUp_Success';
import HomePage from '../../Screens/MainPage/HomePage';


const Stack = createNativeStackNavigator();

const SignUp_Navigation = () => {
  return (
    
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="SignUp_EnterEmail" component={SignUp_EnterEmail} />
      <Stack.Screen name="SignUp_EnterVerificationCode" component={SignUp_EnterVerificationCode} />
      <Stack.Screen name="SignUp_ChooseUserName" component={SignUp_ChooseUserName} />
      <Stack.Screen name="SignUp_EnterPassword" component={SignUp_EnterPassword} />
      <Stack.Screen name="SignUp_Success" component={SignUp_Success} />
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  )
}

export default SignUp_Navigation

const styles = StyleSheet.create({})