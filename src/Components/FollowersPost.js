import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Post_Big_Card from '../Screens/Cards/Post_Big_Card'

const FollowersPost = () => {

    let data = [
        {
            id: 1,
            username: 'FirstUser',
            profile_picture: 'https://picsum.photos/300/300',
            post_picture: 'https://picsum.photos/300/300',
            likes: [
                "user1", "user2", "user3"
            ],
            comments: [
                {
                    id: 1,
                    username: "user1",
                    comment: "Nice post",
                },
                {
                    id: 2,
                    username: "user2",
                    comment: "Not a nice post",
                },
            ],
        },
        {
            id: 2,
            username: 'SecondUser',
            profile_picture: 'https://picsum.photos/300/300',
            post_picture: 'https://picsum.photos/300/300',
            likes: [
                "user1", "user2"
            ],
            comments: [
                {
                    id: 1,
                    username: "user1",
                    comment: "Nice image",
                },
                {
                    id: 2,
                    username: "user2",
                    comment: "doing well?",
                },
            ],
        },
        {
            id: 3,
            username: 'ThirdUser',
            profile_picture: 'https://picsum.photos/300/300',
            post_picture: 'https://picsum.photos/300/300',
            likes: [
                "user1", "user2"
            ],
            comments: [
                {
                    id: 1,
                    username: "user1",
                    comment: "Nice post",
                },
                {
                    id: 2,
                    username: "user2",
                    comment: "Not a nice post",
                },
            ],
        },

    ]

  return (
    <View style={styles.parent}>
      <ScrollView style={styles.container}>
        {data.map((item) => (
            <Post_Big_Card 
                key={item.id}
                username={item.username}
                profile_picture={item.profile_picture}
                post_picture={item.post_picture}
                likes={item.likes}
                comments={item.comments}
            />
        ))}
      </ScrollView>
    </View>
  )
}

export default FollowersPost

const styles = StyleSheet.create({
    parent: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    container: {
        width: '100%',
        height: '100%',
        marginHorizontal: 20,
    },
})