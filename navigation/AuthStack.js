/*import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import FirstLaunchScreen from "../screens/FirstLaunchScreen/FirstLaunchScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignupScreen from "../screens/SignupScreen/SignupScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FirstLaunchInfo from "../utils/FirstLaunchInfo";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import AddPostScreen from "../components/AddPostScreen/AddPostScreen";

const Stack = createStackNavigator();

const AuthStack = ({ navigation }) => {
  let routeName;

  let isFirstLaunch = FirstLaunchInfo();

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = "FirstLaunch";
  } else {
    routeName = "Login";
  }

  return (
    //<Stack.Navigator initialRouteName={routeName}>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="FirstLaunch"
        component={FirstLaunchScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#f9fafd",
            shadowColor: "#f9fafd",
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="f9fafd"
                color="#333"
                onPress={() => navigation.navigate("Login")}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
*/