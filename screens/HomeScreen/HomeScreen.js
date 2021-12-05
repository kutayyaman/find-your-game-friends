import React from "react";
import { Text, TouchableOpacity } from "react-native";
import firebase from "../../database/firebase";
import { FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
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
  {
    id: "3",
    userName: "Ken William",
    userImg: require("../../assets/background/bg.jpg"),
    postTime: "1 hours ago",
    post: "Hey there, this is my test for a post of my social app in React Native.",
    postImg: require("../../assets/gaming/gaming2.jpg"),
    liked: true,
    likes: "1",
    comments: "0",
  },
  {
    id: "4",
    userName: "Selina Paul",
    userImg: require("../../assets/background/bg.jpg"),
    postTime: "1 day ago",
    post: "Hey there, this is my test for a post of my social app in React Native.",
    postImg: require("../../assets/gaming/gaming3.jpg"),
    liked: true,
    likes: "22",
    comments: "1",
  },
  {
    id: "5",
    userName: "Christy Alex",
    userImg: require("../../assets/background/bg.jpg"),
    postTime: "2 days ago",
    post: "Hey there, this is my test for a post of my social app in React Native.",
    postImg: "none",
    liked: false,
    likes: "0",
    comments: "0",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <FlatList
        data={Posts}
        renderItem={({item}) => <PostCard item={item}/>}
        keyExtractor={item=>item.id}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate("AddPostScreen")
        }}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default HomeScreen;
