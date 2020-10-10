import React from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth'

function LaunchScreen() {
  return (
    <View>
      <Text>{ auth().currentUser.displayName }</Text>
    </View>
  );
}

export default LaunchScreen;
