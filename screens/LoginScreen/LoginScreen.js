import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import FormButton from "../../components/LoginScreenComponents/FormButton";
import FormInput from "../../components/LoginScreenComponents/FormInput";
import SocialButton from "../../components/LoginScreenComponents/SocialButton";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      {/*<Image
        source={require("../../assets/loginLogo.png")}
        style={styles.logo}
      />*/}
      <Text style={styles.text}>Find Your Game Friends</Text>
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

      <FormButton
        buttonTitle="Sign In"
        onPress={() => {}}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={()=>{}}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
          <Text >Forgot?</Text>
      </TouchableOpacity>

      <SocialButton 
        buttonTitle='Sign In with Facebook'
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={()=>{}}
      />

<SocialButton 
        buttonTitle='Sign In with Google'
        btnType="google"
        color="#d34d41"
        backgroundColor="#f5e7ea"
        onPress={()=>{}}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={()=>{navigation.navigate('Signup')}}>
          <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 110,
    width: 110,
    resizeMode: "cover",
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
    fontFamily:'Cochin'
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
});
