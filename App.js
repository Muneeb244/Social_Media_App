import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp_Navigation from './src/Navigations/LoginSignup_Navigation/SignUp_Navigation';
import ForgotPassword_Navigation from './src/Navigations/LoginSignup_Navigation/ForgotPassword_Navigation';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/Screens/LoginSignUp/Login/Login';

export default function App() {
  return (
    // <NavigationContainer>
    //   <ForgotPassword_Navigation />
    // </NavigationContainer>
    <Login />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
