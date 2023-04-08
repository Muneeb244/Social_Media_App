import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import HomePageBottomNavigation from '../../Navigations/HomePageBottomNavigation';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import FollowersPost from '../../Components/FollowersPost';

const HomePage = () => {

  const [fontsLoaded] = useFonts({
    'Alkatra': require('../../../assets/fonts/Alkatra-VariableFont_wght.ttf'),
  });

  return (
    <View style={styles.container}>
      <HomePageBottomNavigation/>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  header: {
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    marginTop: 40,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderBottomColor: 'gray',
  },
  text: {
    color: '#fff',
    fontSize: 25,
  }
})