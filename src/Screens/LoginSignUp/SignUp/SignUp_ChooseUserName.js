import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React from "react";

//styles
import pagecss from "../../../commonCSS/pagecss";
import formcss from "../../../commonCSS/formCSS";
import logo from "../../../../assets/logo.png";

import ErrorMessage from "../../../Components/ErrorMessage";

import { Formik } from "formik";
import * as yup from "yup";

import { Ionicons } from "@expo/vector-icons";

const SignUp_ChooseUserName = ({ navigation }) => {

  
  const onSubmit = (values, { resetForm }) => {
    resetForm();
    navigation.navigate("SignUp_EnterPassword");
  };

  const validationSchema = yup.object({
    username: yup
      .string()
      .required("Please enter your username")
      .min(4)
      .label("username"),
  });

  return (
    <View style={pagecss.containerFull}>
      <Formik
        initialValues={{
          username: "",
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
              onPress={() => navigation.navigate("SignUp_EnterVerificationCode")}
            >
              <Ionicons name="arrow-back" size={24} color="gray" />
              <Text style={{ color: "gray" }}>Go Back</Text>
            </TouchableOpacity>
            <Image source={logo} style={pagecss.logo1} />
            <Text style={formcss.formHead2}>
              Choose a Username
            </Text>
            <TextInput
              placeholder="Enter your username"
              style={formcss.formInput}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              keyboardType="default"
            />
            <ErrorMessage error={errors["username"]} visible={touched["username"]} />
            <TouchableOpacity style={formcss.formBtnC} onPress={handleSubmit}>
              <Text style={formcss.formText}>Next</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUp_ChooseUserName;

const styles = StyleSheet.create({});
