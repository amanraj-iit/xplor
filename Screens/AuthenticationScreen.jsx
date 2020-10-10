import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import 'react-native-gesture-handler';
import background from '../Assets/Images/background.png';
import logo from '../Assets/Images/logo.png';
import SignInComponent from '../Components/SignInComponent';
import SignUpComponent from '../Components/SignUpComponent';

function AuthenticationScreen() {
  const [isSignin, setIsSignin] = useState(true);

  return (
    <View style={Styles.container}>
      <ImageBackground source={background} style={Styles.background}>
        <View>
          <Image source={logo} style={Styles.logo}></Image>
          <View style={Styles.authSwitch}>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                fontFamily: isSignin ? 'HelveticaNeue Medium' : 'HelveticaNeue',
              }}
              onPress={() => setIsSignin(true)}>
              Sign In
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                fontFamily: 'HelveticaNeue',
              }}>
              {'  '}|{'  '}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                fontFamily: isSignin ? 'HelveticaNeue' : 'HelveticaNeue Medium',
              }}
              onPress={() => setIsSignin(false)}>
              Sign Up
            </Text>
          </View>
          {isSignin ? (
            <SignInComponent></SignInComponent>
          ) : (
            <SignUpComponent></SignUpComponent>
          )}
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
    resizeMode: 'contain',
    padding: 30,
    justifyContent: 'flex-start',
  },
  logo: {
    height: 100,
    width: 200,
    resizeMode: 'contain',
    marginBottom: 70,
  },
  authSwitch: {
    flexDirection: 'row',
  },
});

export default AuthenticationScreen;
