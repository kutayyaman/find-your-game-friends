import { useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GiftedChat, InputToolbar } from "react-native-gifted-chat";
import { useSelector } from "react-redux";
import firebase from "../database/firebase";

const ChatDetailScreen = () => {
  const route = useRoute();
  const chatId = route.params.chatId;

  const [messages, setMessages] = useState([]);

  const reduxState = useSelector((store) => {
    //redux store'daki bilgileri cekiyoruz
    return {
      store,
    };
  });

  const { uid, displayName } = reduxState.store;

  useEffect(() => {
    return firebase.firebase
      .firestore()
      .doc("chats/" + chatId)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.data()?.messages ?? []);
      });
  }, [chatId]);

  const onSend = (m = []) => {
    firebase.firebase
      .firestore()
      .doc("chats/" + route.params.chatId)
      .set(
        {
          messages: GiftedChat.append(messages, m),
        },
        { merge: true } //sadece messages kismini degistirdik digerleri ayni kaldi boyle yapinca yani biz sadece messages veriyoruz diye digerlerini silmedi
      );
  };

  return (
    <View style={{flex:1}}>
      <GiftedChat
        messages={messages.map((x) => ({
          ...x,
          createdAt: x?.createdAt.toDate(),
        }))}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: uid,
          name: displayName,
        }}
      />
    </View>
  );
};

export default ChatDetailScreen;

const styles = StyleSheet.create({});
