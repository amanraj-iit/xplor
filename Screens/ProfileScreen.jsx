import React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import background from '../Assets/Images/background.png';

function ProfileScreen({navigation}) {
  return (
    <View>
      <ImageBackground source={background} style={{flex: 1}}></ImageBackground>
      <Button title="logout" onPress={() => auth().signOut()}></Button>
    </View>
  );
}

export default ProfileScreen;
