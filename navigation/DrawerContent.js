import React, { useEffect } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate('Profile')}
      />
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
