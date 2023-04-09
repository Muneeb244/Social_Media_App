import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Post_Big_Card = ({
  username,
  profile_picture,
  post_picture,
  likes,
  comments,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: post_picture }} style={styles.profile_picture} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={{uri: post_picture}} style={styles.post_picture} />
    </View>
  );
};

export default Post_Big_Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 350,
    // borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "gray",
    overflow: 'hidden',
  },
  header: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  profile_picture: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "white",
    borderWidth: 1,
  },
  username: {
    marginLeft: 10,
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
  },
  post_picture: {
    marginVertical: 10,
    width: "100%",
    height: '100%',
    resizeMode: 'cover',
    // aspectRatio: 1,
  }
});
