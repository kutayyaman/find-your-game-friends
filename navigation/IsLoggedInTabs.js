import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddPostScreen from "../components/AddPostScreen/AddPostScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignupScreen from "../screens/SignupScreen/SignupScreen";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ActionButton from "react-native-action-button";

const Tab = createBottomTabNavigator();

const IsLoggedInTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 8,
          left: 8,
          right: 8,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 80,
          ...styles.shadow,
        },
      }}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
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
              <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item
                  buttonColor="#9b59b6"
                  title="Find Game Friends"
                  onPress={() => alert("Find Game Friends Tapped!")}
                >
                  <Ionicons name="people-circle-outline" size={25} />
                </ActionButton.Item>
                <ActionButton.Item
                  buttonColor="#3498db"
                  title="Send A Post"
                  onPress={() => {
                    alert("Send A Post tapped");
                  }}
                >
                  <Ionicons name="send-outline" size={25} />
                </ActionButton.Item>
              </ActionButton>
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
