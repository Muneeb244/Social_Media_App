import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

import logo from "../../../../assets/logo.png";
import {
  formInput,
  formHead,
  rightText,
  formBtnC,
  formText,
  centerText,
} from "../../../commonCSS/formCSS";

import { hr80, containerFull, logo1 } from "../../../commonCSS/pagecss";

import { Formik } from "formik";
import * as yup from "yup";
import ErrorMessage from "../../../Components/ErrorMessage";

const Login = ({ navigation }) => {
  const loginValidation = yup.object({
    email: yup.string().email().required().label("Email"),
    password: yup.string().required().min(6).label("Password"),
  });

  const sendToBackend = (values, { resetForm }) => {
    resetForm();
    navigation.navigate("HomePage")
  };
  return (
    <View style={containerFull}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={sendToBackend}
        // validationSchema={loginValidation}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <Image source={logo} style={logo1} />
            <Text style={formHead}>Login</Text>
            <TextInput
              placeholder="Enter your email"
              style={formInput}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />
            <ErrorMessage error={errors["email"]} visible={touched["email"]} />
            <TextInput
              placeholder="Enter your passowrd"
              secureTextEntry
              style={formInput}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            <ErrorMessage
              error={errors["password"]}
              visible={touched["password"]}
            />
            <Text
              style={rightText}
              onPress={() => navigation.navigate('Forgot_EnterEmail')}
            >
              Forgot Password?
            </Text>
            <TouchableOpacity style={formBtnC} onPress={handleSubmit}>
              <Text style={formText}>Submit</Text>
            </TouchableOpacity>
            <View style={hr80}></View>
            <Text style={centerText}>
              Don't have an account?
              <Text style={{color: '#fff'}} onPress={() => navigation.navigate('SignUp_Navigation')}> Sign up</Text>
            </Text>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
