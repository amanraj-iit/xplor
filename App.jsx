import React from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './Navigators/RootStack';

function App() {
  return (
    <NavigationContainer>
      <RootStack></RootStack>
    </NavigationContainer>
  );
}

export default App;
