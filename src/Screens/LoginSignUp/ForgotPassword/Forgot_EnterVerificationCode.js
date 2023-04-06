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

const Forgot_EnterVerificationCode = ({ navigation }) => {

  
  const onSubmit = (values, { resetForm }) => {
    resetForm();
    navigation.navigate("Forgot_EnterNewPassword");
  };

  const validationSchema = yup.object({
    code: yup
      .string()
      .required("Please enter your verification code")
      .min(4)
      .label("Verification Code"),
  });

  return (
    <View style={pagecss.containerFull}>
      <Formik
        initialValues={{
          code: "",
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
              onPress={() => navigation.navigate("Forgot_EnterEmail")}
            >
              <Ionicons name="arrow-back" size={24} color="gray" />
              <Text style={{ color: "gray" }}>Go Back</Text>
            </TouchableOpacity>
            <Image source={logo} style={pagecss.logo1} />
            <Text style={formcss.centerText}>
              A verification code has been sent to your email
            </Text>
            <TextInput
              placeholder="Enter your code"
              style={formcss.formInput}
              onChangeText={handleChange("code")}
              onBlur={handleBlur("code")}
              value={values.code}
              keyboardType="number-pad"
            />
            <ErrorMessage error={errors["code"]} visible={touched["code"]} />
            <TouchableOpacity style={formcss.formBtnC} onPress={handleSubmit}>
              <Text style={formcss.formText}>Next</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Forgot_EnterVerificationCode;

const styles = StyleSheet.create({});
