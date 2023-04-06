import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";

//styles
import pagecss from "../../../commonCSS/pagecss";
import formcss from "../../../commonCSS/formCSS";
import logo from "../../../../assets/logo.png";

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Forgot_Success = ({ navigation }) => {

  const onSubmit = () => {
    ;
  };

  return (
    <View style={pagecss.containerFull}>
      {/* <TouchableOpacity
        style={pagecss.goback}
        onPress={() => navigation.navigate('Login_Navigation')}
      >
        <Ionicons name="arrow-back" size={24} color="gray" />
        <Text style={{ color: "gray" }}>Go Back</Text>
      </TouchableOpacity> */}
      <Image source={logo} style={pagecss.logo1} />
      <View style={{flexDirection: 'row'}}>
        <MaterialCommunityIcons name="check-decagram" size={24} color="green" />
        <Text style={formcss.formHead2}> Password changed successfully</Text>
      </View>
      <TouchableOpacity style={formcss.formBtnC} onPress={() => navigation.navigate("Login")}>
        <Text style={formcss.formText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Forgot_Success;
