import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign, EvilIcons, FontAwesome } from "@expo/vector-icons";

const Post_Big_Card = ({
  username,
  profile_picture,
  post_picture,
  likes,
  comments,
}) => {
  const [liked, setLiked] = React.useState(false);
  const [showComments, setShowComments] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: post_picture }} style={styles.profile_picture} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={{ uri: post_picture }} style={styles.post_picture} />
      <View style={styles.info}>
        <View style={styles.likesNumberC}>
          {liked ? (
            <AntDesign
              name="heart"
              size={26}
              color="red"
              onPress={() => setLiked(false)}
            />
          ) : (
            <AntDesign
              name="hearto"
              size={26}
              color="white"
              onPress={() => setLiked(true)}
            />
          )}
          {liked ? (
            <Text style={styles.likesNumber}>{likes.length + 1}</Text>
          ) : (
            <Text style={styles.likesNumber}>{likes.length}</Text>
          )}
        </View>

        {showComments ? (
          <FontAwesome
            name="comment"
            size={25}
            color="white"
            onPress={() => setShowComments(false)}
          />
        ) : (
          <FontAwesome
            name="comment-o"
            size={25}
            color="white"
            onPress={() => setShowComments(true)}
          />
        )}
      </View>
      <View style={styles.comments}>
        {showComments && <View style={styles.commentsList}>
            {comments.map((comment) => {
              return (
                <View style={styles.comment}>
                  <Text style={styles.commentUsername}>{comment.username}</Text>
                  <Text style={styles.commentText}>{comment.comment}</Text>
                </View>
              );
            })
            }
          </View>}
      </View>
    </View>
  );
};

export default Post_Big_Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    // borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#000",
    overflow: "hidden",
    borderBottomWidth: 0.3,
    borderColor: "gray",
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
    // marginVertical: 10,
    width: "100%",
    height: "80%",
    resizeMode: "cover",
    // aspectRatio: 1,
  },
  info: {
    flexDirection: "row",
    padding: 5,
  },
  likesNumberC: {
    flexDirection: "row",
    marginRight: 10,
  },
  likesNumber: {
    marginLeft: 5,
    fontSize: 18,
    color: "#fff",
    alignItems: "center",
  },
  commentsList: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    padding: 10,
  },
});
