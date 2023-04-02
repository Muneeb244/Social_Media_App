import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";

import logo from "../../../../assets/logo.png";
import { screenContainer, logo1 } from "../../../commonCSS/authStyles";
import { formInput, formHead, rightText } from "../../../commonCSS/formCSS";
import ForgotPassword_Navigation from "../../../Navigations/LoginSignup_Navigation/ForgotPassword_Navigation";

const Login = ({navigation}) => {
  return (
    <View style={screenContainer}>
        <Image source={logo} style={logo1} />
        <Text style={formHead}>Login</Text>
        <TextInput placeholder="Enter your email" style={formInput} />
        <TextInput placeholder="Enter your passowrd" secureTextEntry style={formInput} />
        <Text style={rightText} onPress={() => navigation.navigate(ForgotPassword_Navigation)}>Forgot Password?</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
  }
});
