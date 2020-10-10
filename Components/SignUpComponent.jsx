import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-community/google-signin'
GoogleSignin.configure({
  webClientId: '560465384099-4j9hmhi9hef52m7bim5jn204qu2n1arl.apps.googleusercontent.com'
})

export default function SignUpComponent({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    setSubmitted(true);
    if (email.length > 0 && password.length > 0 && userName.length > 0) {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (res) => {
          setSubmitted(false);
          await res.user
            .updateProfile({
              displayName: userName,
              photoURL:
                'https://image.freepik.com/free-photo/astronaut-deep-space_112293-45.jpg',
            })
            .then(() => {
              firestore().collection('users').doc(res.user.uid).set({
                name: userName,
                email: res.user.email,
                satellites: [],
                satellitesLaunched: 0,
                satellitesOnline: 0,
                satellitesOffline: 0,
                sensorsUsed: [],
              });
            })
        })
        .catch((err) => {
          ToastAndroid.showWithGravity(
            err.message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
          setSubmitted(false)
        });
    } else {
      ToastAndroid.showWithGravity(
        'Username, Email, Password is Compulsory',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      setSubmitted(false);
    }
  };

  const onGoogleSignIn = async() => {
    const { idToken } = await GoogleSignin.signIn();

    const googleCredentials = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredentials).catch(e => console.log(e.message));
  }

  return (
    <ScrollView>
      <TextInput
        style={Styles.textInput}
        placeholder="Username"
        placeholderTextColor="white"
        underlineColorAndroid="white"
        value={userName}
        onChangeText={(e) => setUsername(e)}
        editable={!submitted}></TextInput>
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
          backgroundColor: 'white',
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
          <Text style={{fontSize: 25, fontFamily: 'HelveticaNeue Thin'}}>
            SIGN UP
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
        <Entypo name="google--with-circle" color="white" size={44} onPress = {onGoogleSignIn}></Entypo>
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
