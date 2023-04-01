import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import logo from '../../../../assets/logo.png';

const Login = () => {
  return (
    <View>
      <Image source={logo} resizeMode='contain' />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})