import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Avatar, Button, Subheading, Title } from 'react-native-paper'
import { useSelector } from "react-redux";
import PostCard from '../../components/HomeScreenComponents/PostCard';
import LogoutButton from '../../components/LogoutButton'
import firebase from "../../database/firebase";


const ProfileScreen = () => {
  const [posts, setPosts] = useState([]);
  const reduxState = useSelector((store) => {
    //redux store'daki bilgileri cekiyoruz
    return {
      store,
    };
  });

  const { email,displayName,uid } = reduxState.store;

  useEffect(() => {
    return firebase.firebase
      .firestore()
      .collection("posts")
      .where("uid","==", uid)
      .onSnapshot((querySnapshot) => {
        setPosts(querySnapshot.docs);
      });
}, []);

    
    return (
        <View style={{flex:1, alignItems:"center", justifyContent:"flex-start", marginTop:20, marginBottom:90}}>
            <Avatar.Text label={displayName && displayName.split(" ").reduce((prev,current)=> prev + current[0],"")}/>
            <Title>{displayName}</Title>
            <Subheading>{email}</Subheading>
            <View>
            <LogoutButton/>
            </View>
            <FlatList
              data={posts}
              renderItem={({item}) => <PostCard item={item}/>}
              keyExtractor={item=>item.uid}
              showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
