import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FirstLaunchScreen from "../screens/FirstLaunchScreen/FirstLaunchScreen";
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import AsyncStorage from '@react-native-community/async-storage';


const Stack = createStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect(()=>{
        AsyncStorage.getItem('alreadyLaunched').then((value)=>{
            if(value == null){
                AsyncStorage.setItem('alreadyLaunched','true'); //this is async but bu dont need to wait this
                setIsFirstLaunch(true);
            }else {
                setIsFirstLaunch(false);
            }
        });
    },[]);

    if(isFirstLaunch===null){
        return null;
    } else if (isFirstLaunch ==true){
        routeName='FirstLaunch';
    } else {
        routeName = 'Login';
    }

    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name="FirstLaunch"
                component={FirstLaunchScreen}
                options={{header: () => null}}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{header: () => null}}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
            />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})
