import React from "react";
import firebase from "../../database/firebase";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Container, Card, UserInfo, UserImg, UserName, UserInfoText, PostTime, PostText, PostImg, InteractionWrapper, Interaction, InteractionText, Divider} from '../../styles/FeedStyles'

const HomeScreen = ({ navigation }) => {
  const handleSignout = () => {
    firebase.auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container >
      <Card>
        <UserInfo>
          <UserImg source={require('../../assets/background/bg.jpg')}/>
          <UserInfoText>
            <UserName>kutay yaman</UserName>
            <PostTime>4 hour ago</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>6. video 21:16'da kaldim</PostText>
        <PostImg source={require('../../assets/gaming/gaming1.jpg')}/>
        <InteractionWrapper>
          <Interaction>
            <Ionicons name="heart-outline" size={25}/>
            <InteractionText>Like</InteractionText>
          </Interaction>
          <Interaction>
            <Ionicons name="md-chatbubble-outline" size={25}/>
            <InteractionText>Comment</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card>
      <Card>
        <UserInfo>
          <UserImg source={require('../../assets/gaming/gaming3.jpg')}/>
          <UserInfoText>
            <UserName>maral yurdakul</UserName>
            <PostTime>7 hour ago</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>6. video 21:16'da kaldim</PostText>
        <Divider/>
        <InteractionWrapper>
          <Interaction>
            <Ionicons name="heart-outline" size={25}/>
            <InteractionText>Like</InteractionText>
          </Interaction>
          <Interaction>
            <Ionicons name="md-chatbubble-outline" size={25}/>
            <InteractionText>Comment</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card>
    </Container>
  );
};

export default HomeScreen;


