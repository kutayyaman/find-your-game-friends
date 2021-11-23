import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { InputField, InputWrapper } from "../../styles/AddPost";
import ActionButton from "react-native-action-button";
import Ionicons from "react-native-vector-icons/Ionicons";


const AddPostScreen = () => {
  return (
    <View style={styles.container}>
      <InputWrapper>
        <InputField
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
        />
      </InputWrapper>
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          onPress={() => alert("Photo tapped!")}
        >
          <Ionicons name="camera-outline" size={25} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Choose Photo"
          onPress={() => {alert("Choose photo tapped")}}
        >
          <Ionicons name="md-images-outline" size={25} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});
