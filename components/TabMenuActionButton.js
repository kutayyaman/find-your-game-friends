import React from "react";
import { StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';


const TabMenuActionButton = () => {
    const navigation = useNavigation();
  return (
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
        onPress={() => navigation.navigate("AddPostScreen")}
      >
        <Ionicons name="send-outline" size={25} />
      </ActionButton.Item>
    </ActionButton>
  );
};

export default TabMenuActionButton;

const styles = StyleSheet.create({});
