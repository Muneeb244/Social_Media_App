import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";

//styles
import pagecss from "../../../commonCSS/pagecss";
import formcss from "../../../commonCSS/formCSS";
import logo from "../../../../assets/logo.png";

import ErrorMessage from "../../../Components/ErrorMessage";

import { Formik } from "formik";
import * as yup from "yup";

import { Ionicons } from "@expo/vector-icons";

const Forgot_EnterNewPassword = ({ navigation }) => {

  const [confirm, setConfirm] = useState(false);

  
  const onSubmit = (values, { resetForm }) => {
    if(values.password !== values.confirmPassword) return setConfirm(true);
    resetForm(); 
    navigation.navigate("Forgot_Success");
  };

  const validationSchema = yup.object({
    password: yup
      .string()
      .required("Please enter your password")
      .min(6)
      .label("password"),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .min(6)
      .label("confirm password"),
  });

  return (
    <View style={pagecss.containerFull}>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
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
            <TouchableOpacity
              style={pagecss.goback}
              onPress={() => navigation.navigate("Forgot_EnterVerificationCode")}
            >
              <Ionicons name="arrow-back" size={24} color="gray" />
              <Text style={{ color: "gray" }}>Go Back</Text>
            </TouchableOpacity>
            <Image source={logo} style={pagecss.logo1} />
            {confirm ? <Text style={[formcss.formHead2, {color: 'red'}]} >Passwords does not match</Text> : <Text style={formcss.formHead2}>Choose a strong password</Text>}
            
            <TextInput
              placeholder="Enter your password"
              style={formcss.formInput}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              keyboardType="default"
              secureTextEntry
            />
            <ErrorMessage error={errors["password"]} visible={touched["password"]} />
            <TextInput
              placeholder="Confirm your password"
              style={formcss.formInput}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              keyboardType="default"
              secureTextEntry
            />
            <ErrorMessage error={errors["confirmPassword"]} visible={touched["confirmPassword"]} />
            <TouchableOpacity style={formcss.formBtnC} onPress={handleSubmit}>
              <Text style={formcss.formText}>Next</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Forgot_EnterNewPassword;

const styles = StyleSheet.create({});
