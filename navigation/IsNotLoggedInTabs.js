import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignupScreen from "../screens/SignupScreen/SignupScreen";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const IsNotLoggedInTabs = () => {
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
        name="Login"
        component={LoginScreen}
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
                name="log-in-outline"
                size={focused ? 35 : 25}
                style={{
                  color: focused ? "#e32f45" : "#748c93",
                }}
              />
              <Text>Login</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Signup"
        component={SignupScreen}
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
                name="person-add-outline"
                size={focused ? 35 : 25}
                style={{
                  color: focused ? "#e32f45" : "#748c93",
                }}
              />
              <Text>Signup</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default IsNotLoggedInTabs;

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
