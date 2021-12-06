import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { Subheading } from "react-native-paper";
import FormButton from "../../components/LoginScreenComponents/FormButton";
import FormInput from "../../components/LoginScreenComponents/FormInput";
import SocialButton from "../../components/LoginScreenComponents/SocialButton";
import firebase from "../../database/firebase";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      const response = await firebase.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await response.user.updateProfile({ displayName: name });
      const user = response.user;
      alert("You have successfully signed up");
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      alert(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <FormInput
        labelValue={name}
        onChangeText={(userName) => setName(userName)}
        placeholderText="Name"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
      />

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
        onChangeText={(userConfirmPassword) =>
          setConfirmPassword(confirmPassword)
        }
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton buttonTitle="Sign Up" onPress={handleSignUp} />

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
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9fafd",
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
