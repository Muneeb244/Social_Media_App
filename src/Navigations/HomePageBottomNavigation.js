import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../Screens/MainPage/Home";
import Search from "../Screens/MainPage/Search";
import Notifications from "../Screens/MainPage/Notifications";
import Account from "../Screens/MainPage/Account";

const Tab = createBottomTabNavigator();

const HomePageBottomNavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
          position: "absolute",
          bottom: 0,
          color: 'gray',
          borderTopWidth: 0.3,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "home-sharp": 'home-outline'} size={30} color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "search-sharp": 'search-outline'} size={30} color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "heart-sharp": 'heart-outline'} size={30} color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'person-circle-sharp' : 'person-circle-outline'} size={30} color={'#fff'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomePageBottomNavigation;

const styles = StyleSheet.create({});
