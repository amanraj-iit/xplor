import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';

export default function DrawerContentComponent(props) {
  return (
    console.log(typeof auth().currentUser.photoURL),
    (
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
          <Image
            source={{uri: auth().currentUser.photoURL}}
            style={Styles.image}></Image>
        </DrawerContentScrollView>
      </View>
    )
  );
}

const Styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
});
