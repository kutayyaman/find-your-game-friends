import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createStackNavigator} from '@react-navigation/stack';
import AddPostScreen from "../screens/AddPostScreen/AddPostScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LogoutButton from "../components/LogoutButton";
import TabMenuActionButton from "../components/TabMenuActionButton";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const IsLoggedInTabs = () => {
  
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel:false,
        headerRight: () => (
          <LogoutButton/>
        ),
        tabBarStyle: {
          position: "absolute",
          bottom: 2,
          left: 8,
          right: 8,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
      }}
      tabBarOptions={{
        showLabel: false,
      }}
      
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Ionicons
                name="home-outline"
                size={focused ? 35 : 25}
                style={{
                  color: focused ? "#e32f45" : "#748c93",
                }}
              />
              <Text>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Global"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Ionicons
                name="earth-outline"
                size={focused ? 35 : 25}
                style={{
                  color: focused ? "#e32f45" : "#748c93",
                }}
              />
              <Text>Global</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        listeners={{
          tabPress: (e) => {
            // this button will not open any component or page
            e.preventDefault();
          },
        }}
        name="AddPostScreen"
        component={AddPostScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: -84,
              }}
            >
              <TabMenuActionButton/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Ionicons
                name="chatbox-outline"
                size={focused ? 35 : 25}
                style={{
                  color: focused ? "#e32f45" : "#748c93",
                }}
              />
              <Text>Chat</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ItWillDelete"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Ionicons
                name="person-outline"
                size={focused ? 35 : 25}
                style={{
                  color: focused ? "#e32f45" : "#748c93",
                }}
              />
              <Text>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default IsLoggedInTabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
