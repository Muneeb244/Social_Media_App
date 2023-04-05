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

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const SignUp_Success = ({ navigation }) => {
  const onSubmit = (values, { resetForm }) => {
    console.log("clicked");
    console.log(values);
    resetForm();
    navigation.navigate("SignUp_EnterPassword");
  };

  return (
    <View style={pagecss.containerFull}>
      <TouchableOpacity
        style={pagecss.goback}
        onPress={() => navigation.navigate("Login_Navigation")}
      >
        <Ionicons name="arrow-back" size={24} color="gray" />
        <Text style={{ color: "gray" }}>Go Back</Text>
      </TouchableOpacity>
      <Image source={logo} style={pagecss.logo1} />
      <View style={{flexDirection: 'row'}}>
        <MaterialCommunityIcons name="check-decagram" size={24} color="green" />
        <Text style={formcss.formHead2}> Account created successfully</Text>
      </View>
      <TouchableOpacity style={formcss.formBtnC} onPress={onSubmit}>
        <Text style={formcss.formText}>Let's Roll</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp_Success;

const styles = StyleSheet.create({});
