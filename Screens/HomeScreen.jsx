import React, {useState} from 'react';
import {View, StatusBar, StyleSheet, Text} from 'react-native';
import theme from '../theme.json';
import {SvgUri} from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo';

function HomeScreen({navigation}) {

  const [satellites, setSatellites] = useState([]);

  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor={theme.primary}></StatusBar>
      <Entypo
        name="menu"
        size={30}
        color={theme.secondary}
        style={Styles.drawerIcon}></Entypo>
      <View style = {Styles.headingContainer}>
        <Text style={Styles.xplorStatusText}>XPLOR STATUS</Text>
        <Text style={Styles.satelliteText}>Satellites</Text>
      </View>
      <SvgUri
        width="12%"
        height="12%"
        uri="https://raw.githubusercontent.com/cchirag/GitMath/master/Sat-1.svg"
        fill={theme.secondary}></SvgUri>
      <View style={Styles.bottomContainer}></View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    justifyContent: 'space-between',
  },
  bottomContainer: {
    width: '100%',
    height: 500,
    backgroundColor: theme.secondary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  drawerIcon: {
    marginLeft: 20,
    marginTop: 5,
  },
  headingContainer: {
    marginLeft: 20
  },
  xplorStatusText: {
    color: theme.grey,
    fontFamily: 'HelveticaNeue Medium',
  },
  satelliteText: {
    color: theme.secondary,
    fontSize: 32,
    fontFamily: 'HelveticaNeue Medium',
  },
});

export default HomeScreen;
