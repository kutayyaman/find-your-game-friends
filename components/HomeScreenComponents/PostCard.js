import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
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
const PostCard = ({ item }) => {

  let likeIcon = item.liked ? "heart" : "heart-outline";
  let likeIconColor = item.liked ? "#2e64e5" : "#333";
  
  if (item.likes == 1) {
    var likeText = "1 Like";
  } else if (item.likes > 1) {
    var likeText = item.likes + " Likes";
  } else {
    var likeText = "Like";
  }

  if (item.comments == 1) {
    var commentText = "1 Comment";
  } else if (item.comments > 1) {
    var commentText = item.likes + " Comments";
  } else {
    var commentText = "Comment";
  }

  return (
    <Card>
      <UserInfo>
        <UserImg source={item.userImg} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImg != "none" ? <PostImg source={item.postImg} /> : <Divider />}
      <InteractionWrapper>
        <Interaction active={item.liked}>
          <Ionicons name={likeIcon} size={25} color={likeIconColor} />
          <InteractionText active={item.liked}>{likeText}</InteractionText>
        </Interaction>
        <Interaction>
          <Ionicons name="md-chatbubble-outline" size={25} />
          <InteractionText>{commentText}</InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
};

export default PostCard;
