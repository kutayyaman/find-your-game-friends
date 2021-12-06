import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Button, Subheading, Title } from 'react-native-paper'
import { useSelector } from "react-redux";
import LogoutButton from '../../components/LogoutButton'

const ProfileScreen = () => {

    const reduxState = useSelector((store) => {
        //redux store'daki bilgileri cekiyoruz
        return {
          store,
        };
      });
    
      const { email,displayName } = reduxState.store;
    return (
        <View style={{flex:1, alignItems:"center", justifyContent:"flex-start"}}>
            <Avatar.Text label={displayName && displayName.split(" ").reduce((prev,current)=> prev + current[0],"")}/>
            <Title>{displayName}</Title>
            <Subheading>{email}</Subheading>
            <View>
            <Button>Sign Out</Button>
            <LogoutButton/>
            </View>
            
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
