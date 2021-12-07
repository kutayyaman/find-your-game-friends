import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { List, Avatar, Divider } from "react-native-paper";
import { useSelector } from "react-redux";
import firebase from "../../database/firebase";

const ChatList = (props) => {
  const { email } = props;
  const [chats, setChats] = useState([]);
  const navigation = useNavigation();

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

  return (
    <View>
      {chats.map((chat) => (
        <React.Fragment>
          <List.Item
            title={chat.data().users.find((x) => x != email)}
            description={chat.data().messages[0].text}
            left={() => <Avatar.Text label={chat.data().users.find((x) => x != email).split(' ').reduce((prev,current)=>prev+current[0],"")} size={54} />}
            onPress={()=>{navigation.navigate('ChatDetail',{chatId: chat.id})}}
          />
          <Divider style={{ backgroundColor: "black" }} />
        </React.Fragment>
      ))}
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({});
