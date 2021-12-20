import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from "../../styles/FeedStyles";
import firebase from "../../database/firebase";
import { useNavigation } from "@react-navigation/core";
import { timeDifference } from "../../utils/timeDiffrence";

const PostCard = ({ item }) => {
  const [chatId,setChatId] = useState(null);
  const navigation = useNavigation();

  const reduxState = useSelector((store) => {
    //redux store'daki bilgileri cekiyoruz
    return {
      store,
    };
  });

  const { email, displayName, uid } = reduxState.store;

const calculateTimeDifference = (isostring)=>{
  let dateOfPost = new Date(isostring);
  return timeDifference(new Date(),dateOfPost);
}
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
          <UserName>{item.data()?.displayName}({item.data()?.email})</UserName>
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
      <Divider />

    </Card>
  );
};

export default PostCard;
