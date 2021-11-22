import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import FormButton from "../../components/LoginScreenComponents/FormButton";
import FormInput from "../../components/LoginScreenComponents/FormInput";
import SocialButton from "../../components/LoginScreenComponents/SocialButton";
import firebase from "../../database/firebase";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();


  const handleSignUp = () => {
    firebase.auth
    .createUserWithEmailAndPassword(email,password)
    .then(userCredentials => {
      const user = userCredentials.user;
      alert("You have successfully signed up");
    })
    .catch(error => {
      alert(error.message);
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userConfirmPassword) => setConfirmPassword(confirmPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={handleSignUp}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{" "}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <TouchableOpacity>
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>

      {/*<SocialButton
        buttonTitle="Sign In with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {
          
        }}
      />

      <SocialButton
        buttonTitle="Sign In with Google"
        btnType="google"
        color="#d34d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />*/}

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.navButtonText}>
          Have an account? Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 35,
    justifyContent: "center",
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",
    color: "grey",
  },
});
