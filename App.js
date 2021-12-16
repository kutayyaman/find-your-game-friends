/*import React from "react";
import Providers from "./navigation";


export default function App() {
  return <Providers/>
}*/

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const store = configureStore();
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
      <StatusBar/>
    </Provider>
  );
};

export default App;
