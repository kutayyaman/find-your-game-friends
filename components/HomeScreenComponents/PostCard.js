import React, { useEffect, useRef, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import {
  Card,
  UserInfo,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  Divider,
} from "../../styles/FeedStyles";
import firebase from "../../database/firebase";
import { useNavigation } from "@react-navigation/core";
import { timeDifference } from "../../utils/timeDiffrence";
import { TouchableOpacity } from "react-native-gesture-handler";
import YesOrNoDialog from "../YesOrNoDialog";

const PostCard = ({ item }) => {
  const navigation = useNavigation();
  const yesOrNoDialogRef = useRef();
  const reduxState = useSelector((store) => {
    //redux store'daki bilgileri cekiyoruz
    return {
      store,
    };
  });
  const { email, displayName, uid } = reduxState.store;

  const calculateTimeDifference = (isostring) => {
    let dateOfPost = new Date(isostring);
    return timeDifference(new Date(), dateOfPost);
  };

  const deletePost = (id) => {
    firebase.firebase
      .firestore()
      .collection("posts")
      .doc(id)
      .delete()
      .then(()=>{
        alert("successfully deleted")
      })
      .catch(()=>{
        alert("an error occured !!!")
      })
  };
  /*const getChat =  () => {
      firebase.firebase
        .firestore()
        .collection("chats")
        .where("users", "in",  [['yaman', 'kutay']])
        .onSnapshot( (querySnapshot) => {
          querySnapshot.forEach((doc)=>{
              alert(doc.id);
              setChatId(doc.id);
          })
        });
        
  };
  const createChat = async () => {
      const response = await firebase.firebase
              .firestore()
              .collection("chats")
              .add({
                users: ["yaman", "kutay"],
              });
            navigation.navigate("ChatDetail", { chatId: response.id });
  }*/
  return (
    <Card>
      <UserInfo>
        <UserInfoText>
          <UserName>
            {item.data()?.displayName}({item.data()?.email})
          </UserName>
          <PostTime>{calculateTimeDifference(item.data()?.date)}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.data()?.postText}</PostText>
      {/*<InteractionWrapper>
        <Interaction onPress={()=>{
          getChat();
          if(chatId){
            alert(JSON.stringify(chatId));
            navigation.navigate("ChatDetail", { chatId: chatId });
          }else{
            createChat();
          }
          }}>
          <Ionicons name="chatbox-ellipses-outline" size={25}/>
          <InteractionText>Send Message</InteractionText>
        </Interaction>
        </InteractionWrapper>*/}
      {item.data()?.email === email && 
        <TouchableOpacity style={{ alignItems: "flex-end" }} onPress={()=>{yesOrNoDialogRef.current?.showDialog();}}>
          <Ionicons
            name="trash-outline"
            size={20}
            style={{
              color: "red",
            }}
          />
        </TouchableOpacity>
      }
      <Divider />
      <YesOrNoDialog ref={yesOrNoDialogRef} description="Are you sure to delete the post?" yesAction={()=>{deletePost(item.id)}}/>
    </Card>
    
  );
};

export default PostCard;
