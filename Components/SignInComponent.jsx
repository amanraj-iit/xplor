import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import theme from '../theme.json'

export default function SignInComponent({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async () => {
    setSubmitted(true);
    if (email.length > 0 && password.length > 0) {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
          ToastAndroid.showWithGravity(
            err.message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
        })
        .finally(() => {
          setSubmitted(false);
        });
    } else {
      ToastAndroid.showWithGravity(
        'Email and Passwors is Compulsory',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      setSubmitted(false);
    }
  };

  return (
    <ScrollView>
      <TextInput
        style={Styles.textInput}
        placeholder="Email"
        placeholderTextColor="white"
        underlineColorAndroid="white"
        value={email}
        onChangeText={(e) => setEmail(e)}
        editable={!submitted}></TextInput>
      <TextInput
        style={Styles.textInput}
        placeholder="Password"
        placeholderTextColor="white"
        underlineColorAndroid="white"
        secureTextEntry={true}
        value={password}
        onChangeText={(e) => setPassword(e)}
        editable={!submitted}></TextInput>
      <TouchableWithoutFeedback
        onPress={handleSubmit}
        containerStyle={{
          backgroundColor: theme.secondary,
          height: 50,
          width: Dimensions.get('screen').width * 0.8,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginVertical: 25,
        }}
        disabled={submitted}>
        {submitted ? (
          <ActivityIndicator color="black" size={25}></ActivityIndicator>
        ) : (
          <Text style={{fontSize: 25, fontFamily: 'HelveticaNeue Thin', color: "black"}}>
            SIGN IN
          </Text>
        )}
      </TouchableWithoutFeedback>
      <Text
        style={{
          fontSize: 25,
          fontFamily: 'HelveticaNeue Thin',
          color: 'white',
          textAlign: 'center',
        }}>
        Or
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: Dimensions.get('screen').width * 0.5,
          justifyContent: 'space-evenly',
          alignSelf: 'center',
          marginVertical: 25,
        }}>
        <Entypo name="facebook-with-circle" color="white" size={44}></Entypo>
        <Entypo name="google--with-circle" color="white" size={44}></Entypo>
        <Entypo name="twitter-with-circle" color="white" size={44}></Entypo>
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  textInput: {
    color: 'white',
    fontFamily: 'HelveticaNeue',
    marginVertical: 25,
  },
});
