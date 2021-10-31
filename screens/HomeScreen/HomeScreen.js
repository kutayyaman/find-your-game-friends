import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../../database/firebase";

const HomeScreen = ({navigation}) => {
    const handleSignout = () => {
        firebase.auth
        .signOut()
        .then(()=>{
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }
  return (
    <View style={styles.container}>
      <Text>Email: {firebase.auth.currentUser?.email}</Text>
      <TouchableOpacity 
      style={styles.navButton}
      onPress={handleSignout}
      >
        <Text style={styles.navButtonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      paddingTop: 50,
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: "500",
      color: "#2e64e5",
    },
  });