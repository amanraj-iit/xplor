import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import background from '../Assets/Images/background.png';
import logo from '../Assets/Images/logo.png';
import earth from '../Assets/Images/earth-bw.png';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import theme from '../theme.json';

function IntroScreen({navigation}) {
  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor="black"></StatusBar>
      <ImageBackground source={background} style={Styles.background}>
        <Image source={earth} style={Styles.earth}></Image>
        <Image source={logo} style={Styles.logo}></Image>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 70,
          }}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('AuthenticationScreen')}
            containerStyle={{
              backgroundColor: theme.secondary,
              height: 50,
              width: Dimensions.get('screen').width * 0.8,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'HelveticaNeue Thin',
                color: 'black',
              }}>
              CONTINUE
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  logo: {
    height: 110,
    width: 230,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 280,
    right: 30,
  },
  earth: {
    width: 1000,
    height: 500,
    resizeMode: 'contain',
    transform: [
      {
        rotateZ: '-20deg',
      },
      {
        translateY: -280,
      },
      {
        translateX: -280,
      },
    ],
    
  },
});

export default IntroScreen;
