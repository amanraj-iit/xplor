import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, Text, ScrollView, Linking } from 'react-native';
import theme from '../theme.json';
import { SvgUri } from 'react-native-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Axios from 'axios'
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
function CheckoutScreen({ route, navigation }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [satelliteName, setSatelliteName] = useState("");

  const dateSetting = (event, selectedDate) => {
    const selDate = selectedDate || date;
    setShow(false);
    setDate(selDate);
  };

  const launch = async () => {
    Linking.openURL("https://commerce.coinbase.com/checkout/418b401d-abef-4673-917a-967f4f4ab3b9")
  }

  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor={theme.primary}></StatusBar>
      <MaterialIcons
        name="keyboard-arrow-left"
        size={30}
        color={theme.secondary}
        style={Styles.drawerIcon}
        onPress={() => navigation.pop()}></MaterialIcons>

      <View style={Styles.headingContainer}>
        <Text style={Styles.xplorText}>XPLOR</Text>
        <Text style={Styles.launchText}>Launch</Text>
      </View>
      <TouchableWithoutFeedback onPress={launch}>
        <View style={Styles.checkoutButton}>
          <View style={Styles.checkoutButtonInnerContainer}>
            <SvgUri
              width="30"
              height="30"
              uri="https://raw.githubusercontent.com/cchirag/GitMath/master/Launch.svg"
              fill={theme.secondary}></SvgUri>
            <Text style={Styles.checkoutText}>Launch</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color={theme.secondary}></MaterialIcons>
        </View>
      </TouchableWithoutFeedback>

      <View style={Styles.bottomContainer}>
        <Text style={Styles.Schedule}>Schedule</Text>
        <View style={Styles.inputContainer}>
          <SvgUri
            width="40"
            height="40"
            uri="https://raw.githubusercontent.com/cchirag/GitMath/master/Sat-1.svg"
            fill={theme.primary}></SvgUri>
          <TextInput
            placeholder="Satellite Name"
            value={satelliteName}
            onChangeText={(e) => setSatelliteName(e)}
            style={Styles.textInput}></TextInput>
        </View>
        <View style={Styles.inputContainer}>
          <SvgUri
            width="40"
            height="40"
            uri="https://raw.githubusercontent.com/cchirag/GitMath/master/Date.svg"
            fill={theme.primary}></SvgUri>
          <Text style={Styles.launchDateText} onPress={() => setShow(true)}>
            Launch date: {date.toLocaleDateString()}
          </Text>
          {show ? (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              display="spinner"
              onChange={dateSetting}
            />
          ) : null}
        </View>
        <View style={Styles.inputContainer}>
          <SvgUri
            width="40"
            height="40"
            uri="https://raw.githubusercontent.com/cchirag/GitMath/master/Dollar.svg"
            fill={theme.primary}></SvgUri>
          <Text style={Styles.launchDateText} onPress={() => setShow(true)}>
            Total: ${route.params.total.toFixed(2)}
          </Text>
        </View>
      </View>
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
    marginLeft: 20,
  },
  xplorText: {
    color: theme.grey,
    fontFamily: 'HelveticaNeue Medium',
  },
  launchText: {
    color: theme.secondary,
    fontSize: 32,
    fontFamily: 'HelveticaNeue Medium',
  },
  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  checkoutButtonInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkoutText: {
    color: theme.secondary,
    fontSize: 28,
    marginHorizontal: 10,
    fontFamily: 'HelveticaNeue Medium',
  },
  Schedule: {
    fontFamily: 'HelveticaNeue Thin',
    fontSize: 32,
    color: theme.primary,
    margin: 20,
  },
  inputContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.grey,
    paddingBottom: 15,
    marginTop: 15,
    alignSelf: 'center',
  },
  textInput: {
    marginLeft: 10,
  },
  scrollCoontaineer: {
    flex: 1,
  },
  launchDateText: {
    color: theme.grey,
    marginLeft: 10,
  },
});

export default CheckoutScreen;
