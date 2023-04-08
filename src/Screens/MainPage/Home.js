import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import pagecss from '../../commonCSS/pagecss'
import FollowersPost from '../../Components/FollowersPost';
import { FontAwesome } from '@expo/vector-icons';

const Home = () => {
  return (
    <View style={pagecss.containerFull}>
      <View style={styles.header}>
        <Text style={styles.text}>Memer's Hub</Text>
        <FontAwesome name="paper-plane" size={21} color="#fff" />
      </View>
      <FollowersPost />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    // marginTop: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderBottomColor: 'gray',
    // position: 'absolute',
    // top: 0,
  },
  text: {
    color: '#fff',
    fontSize: 25,
  }
})