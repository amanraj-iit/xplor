import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgUri} from 'react-native-svg';
import theme from '../theme.json';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function SensorComponent(props) {
  const [added, setAdded] = useState(false);
  return (
    <View style={Styles.outerContainer}>
      <View style={Styles.leftContainer}>
        <SvgUri
          height="40"
          width="40"
          uri={props.image}
          fill={theme.primary}></SvgUri>
        <View style={Styles.textContainer}>
          <Text style={Styles.nameText}>{props.name}</Text>
          <Text>{'$' + props.price}</Text>
        </View>
      </View>
      {added ? (
        <Fontisto
          name="minus-a"
          size={24}
          color={theme.grey}
          onPress={(e) => {
            setAdded(!added),
              props.removeFromCart({name: props.name, price: props.price});
          }}></Fontisto>
      ) : (
        <Octicons
          name="plus"
          size={24}
          color={theme.grey}
          onPress={(e) => {
            setAdded(!added),
              props.addToCart({name: props.name, price: props.price});
          }}></Octicons>
      )}
    </View>
  );
}

const Styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    borderBottomColor: theme.grey,
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginTop: 15,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginHorizontal: 10,
  },
  nameText: {
    fontFamily: 'HelveticaNeue Medium',
    fontSize: 18,
  },
});
