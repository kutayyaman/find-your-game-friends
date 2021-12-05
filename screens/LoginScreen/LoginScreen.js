import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import FormButton from "../../components/LoginScreenComponents/FormButton";
import FormInput from "../../components/LoginScreenComponents/FormInput";
import firebase from "../../database/firebase";
import { useDispatch } from 'react-redux';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();


  const handleLogin = () => {
    firebase.auth
    .signInWithEmailAndPassword(email,password)
    .then(userCredentials => {
      //login is success
      const action = {
        type: 'login-success',
        payload: {email,password}
      }
      dispatch(action);
      
    })
    .catch(error => {
      alert(error.message);
    })
  }

  useEffect(()=>{
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      if(user){
        navigation.replace("Home");
      }

      return unsubscribe;
    }, [])
  },[])

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
        onPress={handleLogin}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?(70.videoda kaldim reduxla alakali olan diger komponentleri reduxla iliskilendirmek)</Text>
      </TouchableOpacity>

      {/*<SocialButton
        buttonTitle="Sign In with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />

      <SocialButton
        buttonTitle="Sign In with Google"
        btnType="google"
        color="#d34d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />*/}

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
    /*fontFamily: "Cochin",*/
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
