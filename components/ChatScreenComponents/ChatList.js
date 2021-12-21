import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { List, Avatar, Divider } from "react-native-paper";
import { useSelector } from "react-redux";
import firebase from "../../database/firebase";
import YesOrNoDialog from "../YesOrNoDialog";
import Ionicons from "react-native-vector-icons/Ionicons";


const ChatList = (props) => {
  const { email } = props;
  const [chats, setChats] = useState([]);
  const navigation = useNavigation();
  const yesOrNoDialogRef = useRef();


  useEffect(() => {
    if (email) {
      return firebase.firebase
        .firestore()
        .collection("chats")
        .where("users", "array-contains", email)
        .onSnapshot((querySnapshot) => {
          setChats(querySnapshot.docs);
        });
    }
  }, [email]);

  const deleteChat = (id) => {
    firebase.firebase
      .firestore()
      .collection("chats")
      .doc(id)
      .delete()
      .then(()=>{
        alert("successfully deleted")
      })
      .catch(()=>{
        alert("an error occured !!!")
      })
  };

  return (
    <View>
      {chats.map((chat) => (
        <React.Fragment>
          <List.Item
          onLongPress={()=>{
            chat.data().users.forEach((userMail)=>{
              if(userMail == email){
                yesOrNoDialogRef.current?.showDialog();
              }
            })
            
          }}
            title={chat.data().users.find((x) => x != email)}
            description={chat.data()?.messages && chat.data()?.messages[0]?.text}
            left={() => <Avatar.Text label={chat.data().users.find((x) => x != email).split(' ').reduce((prev,current)=>prev+current[0],"")} size={54} />}
            onPress={()=>{navigation.navigate('ChatDetail',{chatId: chat.id})}}
          />
          <Divider style={{ backgroundColor: "black" }} />
          <YesOrNoDialog ref={yesOrNoDialogRef} description="Are you sure to delete the chat?" yesAction={()=>{deleteChat(chat.id)}}/>
        </React.Fragment>
      ))}
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({});
