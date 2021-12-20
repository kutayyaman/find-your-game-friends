import React, { useEffect, useState } from "react";
import firebase from "../../database/firebase";
import { FlatList } from "react-native";
import PostCard from "../../components/HomeScreenComponents/PostCard";
import {
  Container,
} from "../../styles/FeedStyles";

const Posts = [
  // bunlar firebaseden gelcek simdilik boyle kalsin
  {
    id: "1",
    userName: "Jenny Doe",
    userImg: require("../../assets/background/bg.jpg"),
    postTime: "4 mins ago",
    post: "Hey there, this is my test for a post of my social app in React Native.",
    postImg: require("../../assets/gaming/gaming1.jpg"),
    liked: true,
    likes: "14",
    comments: "5",
  },
  {
    id: "2",
    userName: "John Doe",
    userImg: require("../../assets/login/loginLogo.png"),
    postTime: "2 hours ago",
    post: "Hey there, this is my test for a post of my social app in React Native.",
    postImg: "none",
    liked: false,
    likes: "8",
    comments: "0",
  },
];

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      return firebase.firebase
        .firestore()
        .collection("posts")
        .orderBy("date", "desc")
        .onSnapshot((querySnapshot) => {
          setPosts(querySnapshot.docs);
        });
  }, []);

  return (
    <Container style={{ marginBottom:60}}>
      <FlatList
        data={posts}
        renderItem={({item}) => <PostCard item={item}/>}
        keyExtractor={item=>item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default HomeScreen;
