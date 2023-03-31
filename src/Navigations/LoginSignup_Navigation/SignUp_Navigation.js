import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp_EnterEmail from '../Screens/SignUp/SignUp_EnterEmail';
import SignUp_VericationCode from '../Screens/SignUp/SignUp_VericationCode';
import SignUp_EnterPassword from '../Screens/SignUp/SignUp_EnterPassword';
import SignUp_ChooseUserName from '../Screens/SignUp/SignUp_ChooseUserName';
import SignUp_Success from '../Screens/SignUp/SignUp_Success';

const Stack = createNativeStackNavigator();

const SignUp_Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp_EnterEmail" component={SignUp_EnterEmail} />
      <Stack.Screen name="SignUp_VericationCode" component={SignUp_VericationCode} />
      <Stack.Screen name="SignUp_EnterPassword" component={SignUp_EnterPassword} />
      <Stack.Screen name="SignUp_ChooseUserName" component={SignUp_ChooseUserName} />
      <Stack.Screen name="SignUp_Success" component={SignUp_Success} />
    </Stack.Navigator>
  )
}

export default SignUp_Navigation

const styles = StyleSheet.create({})