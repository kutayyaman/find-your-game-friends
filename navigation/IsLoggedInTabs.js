import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createStackNavigator} from '@react-navigation/stack';
import AddPostScreen from "../screens/AddPostScreen/AddPostScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LogoutButton from "../components/LogoutButton";
import TabMenuActionButton from "../components/TabMenuActionButton";
import ChatScreen from "../screens/ChatScreen/ChatScreen";
import { Provider, DefaultTheme } from "react-native-paper";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import ChatDetailScreen from "../screens/ChatDetailScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ab47bc',
    accent: '#00e676',
  },
};
const HomeStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      
    />
    <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      
    />
    <Stack.Screen
      name="ChatDetail"
      component={ChatDetailScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerShown:false,
        cardStyle:{
          marginBottom:70
        }
      }}
    />
  </Stack.Navigator>
);

const ChatStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
        name="Chat"
        component={ChatScreen}
        
      />
    <Stack.Screen
      name="ChatDetail"
      component={ChatDetailScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerShown:false,
        cardStyle:{
          marginBottom:70
        }
      }}
    />
  </Stack.Navigator>
);

const IsLoggedInTabs = () => {
  
  return (
    <Provider theme={theme}>
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        showLabel:false,
        /*headerRight: () => (
          <LogoutButton/>
        ),*/
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
          headerShown:false,
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
        
        name="AddPostScreen"
        component={AddPostScreen}
        options={{
          headerShown:true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Ionicons
                name="send-outline"
                size={focused ? 35 : 25}
                style={{
                  color: focused ? "#e32f45" : "#748c93",
                }}
              />
              <Text>Post</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStack}
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
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown:true,
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
    </Provider>
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
