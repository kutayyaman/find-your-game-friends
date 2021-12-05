import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import firebase from "../database/firebase";
import { logoutSuccess } from "../redux/authActions";


const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleSignout = async () => {
    firebase.auth
      .signOut()
      .then(() => {
        dispatch(logoutSuccess());
      })
      .catch((error) => alert(error.message));
  };
  return (
    <TouchableOpacity style={styles.button} onPress={handleSignout}>
      <Ionicons
        name="log-out-outline"
        size={28}
        style={{
          color: "#748c93",
        }}
      />
    </TouchableOpacity>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    top: 10,
  },
  button: {
    alignItems: "center",
    padding: 10,
  },
});
