import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import React from "react";

//styles
import pagecss from "../../../commonCSS/pagecss";
import formcss from "../../../commonCSS/formCSS";
import logo from "../../../../assets/logo.png";

import ErrorMessage from "../../../Components/ErrorMessage";

import { Formik } from "formik";
import * as yup from "yup";

import { Ionicons } from "@expo/vector-icons";

const SignUp_EnterEmail = ({ navigation }) => {


  const onSubmit = (values, { resetForm }) => {
    resetForm();
    navigation.navigate('SignUp_EnterVerificationCode');
  };

  const validationSchema = yup.object({
    email: yup.string().email().required().label("Email"),
  });

  return (
    <View style={pagecss.containerFull}>
      <Formik
        initialValues={{
          email: "",
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
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="gray" />
            <Text style={{ color: "gray" }}>Go Back</Text>
          </TouchableOpacity>
          <Image source={logo} style={pagecss.logo1} />
          <Text style={formcss.formHead2}>Create an account</Text>
          <TextInput
            placeholder="Enter your email"
            style={formcss.formInput}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            keyboardType="email-address"
          />
          <ErrorMessage error={errors["email"]} visible={touched["email"]} />
          <TouchableOpacity style={formcss.formBtnC} onPress={handleSubmit}>
              <Text style={formcss.formText}>Next</Text>
            </TouchableOpacity>
        </>
          )}
      </Formik>
    </View>
  );
};

export default SignUp_EnterEmail;

const styles = StyleSheet.create({});
