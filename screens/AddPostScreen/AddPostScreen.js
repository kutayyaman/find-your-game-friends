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
      <ActionButton onPress={()=>{alert("send post is clicked")}} style={styles.actionButton} buttonColor="#3C00E1">
        
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
  actionButton: {
    marginBottom: 50
  }
});
