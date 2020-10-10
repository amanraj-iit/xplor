import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import theme from '../theme.json';
import Entypo from 'react-native-vector-icons/Entypo';

export default function HeaderComponent(props) {
  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <Entypo
          name="menu"
          size={32}
          color={theme.white}
          onPress={() => props.navigation.openDrawer()}></Entypo>
        <Text style={Styles.headerTitle}>{props.title}</Text>
      </View>
      {props.children}
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height * 0.3,
    width: '130%',
    backgroundColor: theme.secondary,
    borderBottomLeftRadius: 280,
    borderBottomRightRadius: 280,
    alignSelf: 'center',
  },
  headerContainer: {
    width: Dimensions.get('screen').width,
    alignSelf: 'center',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: theme.white,
    fontSize: 32,
    width: Dimensions.get('screen').width - 82,
    textAlign: 'center',
  },
});
