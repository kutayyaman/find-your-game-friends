/*import React from "react";
import Providers from "./navigation";


export default function App() {
  return <Providers/>
}*/

import React, { useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import { StatusBar } from "expo-status-bar";

import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import firebase from "./database/firebase";

import { Platform } from "react-native";
import Constants from "expo-constants";
import axios from "axios";
import expoNotificationSettings from "./notifications/expoNotificationSettings";


const App = () => {
  const store = configureStore();

  
  useEffect(() => {
    return expoNotificationSettings();
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
      <StatusBar />
    </Provider>
  );
};

export default App;
