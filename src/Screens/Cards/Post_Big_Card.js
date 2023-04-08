import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Post_Big_Card = ({username, profile_picture, post_picture, likes, comments}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}>{username}</Text>
    </View>
  )
}

export default Post_Big_Card

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10,
    }
})