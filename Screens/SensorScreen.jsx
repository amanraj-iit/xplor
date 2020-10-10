import React, {useState} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';
import 'react-native-gesture-handler';
import theme from '../theme.json';

function SensorScreen({navigation}) {
  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor={theme.primary}></StatusBar>
      <View style={Styles.bottomContainer}></View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    width: '100%',
    height: 500,
    backgroundColor: theme.secondary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});

export default SensorScreen;
