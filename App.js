import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp_Navigation from './src/Navigations/LoginSignup_Navigation/SignUp_Navigation';
import Login_Navigation from './src/Navigations/LoginSignup_Navigation/Login_Navigation';
import ForgotPassword_Navigation from './src/Navigations/LoginSignup_Navigation/ForgotPassword_Navigation';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/Screens/LoginSignUp/Login/Login';
import SignUp_EnterPassword from './src/Screens/LoginSignUp/SignUp/SignUp_EnterPassword';

export default function App() {
  return (
    <NavigationContainer>
      <Login_Navigation />
    </NavigationContainer>
    // <SignUp_EnterPassword />
    // <Login />
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
