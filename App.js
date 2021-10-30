import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        {/*<AppStack.Screen name="Deneme" component={OnboardingScreenExamlpe} />
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />*/}
        <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
