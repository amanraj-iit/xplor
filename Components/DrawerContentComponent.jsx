import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import theme from '../theme.json';

export default function DrawerContentComponent(props) {
  return (
    (
      <View style={{flex: 1}}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{alignItems: 'flex-start', marginLeft: 30}}>
          <Image
            source={{uri: auth().currentUser.photoURL}}
            style={Styles.image}></Image>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'HelveticaNeue Medium',
              textAlign: 'left',
            }}>
            {auth().currentUser.displayName}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'HelveticaNeue Thin',
              textAlign: 'left',
            }}>
            {auth().currentUser.email}
          </Text>
          <TouchableWithoutFeedback
            style={Styles.drawerButtons}
            onPress={() => props.navigation.navigate('HomeScreen')}>
            <Text style={Styles.buttonText}>Home</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            style={Styles.drawerButtons}
            onPress={() => props.navigation.navigate('PeripheralsStack')}>
            <Text style={Styles.buttonText}>Peripherals</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            style={Styles.drawerButtons}
            onPress={() => auth().signOut()}>
            <Text style={Styles.buttonText}>Sign Out</Text>
          </TouchableWithoutFeedback>
        </DrawerContentScrollView>
      </View>
    )
  );
}

const Styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    marginVertical: 10,
    borderRadius: 20,
  },
  drawerButtons: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: theme.primary,
    fontSize: 24,
    fontFamily: 'HelveticaNeue Regular',
    width: 200,
    textAlign: 'left',
  },
});
