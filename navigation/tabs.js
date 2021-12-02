import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import IsLoggedInTabs from "./IsLoggedInTabs";
import IsNotLoggedInTabs from "./IsNotLoggedInTabs";


const Tab = createBottomTabNavigator();

const Tabs = () => {
  const reduxState = useSelector((store) => {
    //redux store'daki bilgileri cekiyoruz
    return {
      isLoggedIn: store.isLoggedIn,
    };
  });

  const {isLoggedIn} = reduxState;
  return (
    isLoggedIn ? <IsLoggedInTabs/> : <IsNotLoggedInTabs/>
  );
};

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

export default Tabs;
