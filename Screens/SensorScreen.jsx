import React, {useState} from 'react';
import {View, StatusBar, StyleSheet, Text, ToastAndroid} from 'react-native';
import 'react-native-gesture-handler';
import theme from '../theme.json';
import Entypo from 'react-native-vector-icons/Entypo';
import {SvgUri} from 'react-native-svg';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SensorComponent from '../Components/SensorComponent';

function SensorScreen({navigation}) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const sensors = [
    {
      id: 1,
      image: 'https://raw.githubusercontent.com/cchirag/GitMath/master/Air.svg',
      name: 'Air Quality',
      price: 5.99,
    },
    {
      id: 2,
      image:
        'https://raw.githubusercontent.com/cchirag/GitMath/master/Humidity.svg',
      name: 'Humidity',
      price: 3.29,
    },
    {
      id: 3,
      image:
        'https://raw.githubusercontent.com/cchirag/GitMath/master/Temp.svg',
      name: 'Temperature',
      price: 5.49,
    },
    {
      id: 4,
      image:
        'https://raw.githubusercontent.com/cchirag/GitMath/master/Camera.svg',
      name: 'Camera',
      price: 9.99,
    },
  ];

  const addToCart = (sensor) => {
    setCart((prevState) => [...prevState, sensor]);
    setTotal(total + sensor.price);
  };

  const removeFromCart = (sensor) => {
    var tempCart = cart;
    cart.forEach((c, index) => {
      if (c.name === sensor.name) {
        tempCart.splice(index, 1);
        setCart(tempCart);
        setTotal(total - c.price);
      }
    });
  };

  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor={theme.primary}></StatusBar>
      <Entypo
        name="menu"
        size={30}
        color={theme.secondary}
        style={Styles.drawerIcon}></Entypo>
      <View style={Styles.headingContainer}>
        <Text style={Styles.xplorText}>XPLOR</Text>
        <Text style={Styles.peripheralsText}>Peripherals</Text>
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          if (cart.length > 0) {
            navigation.push('CheckoutScreen', {total: total});
          } else {
            ToastAndroid.showWithGravity("Cart is empty", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
          }
        }}>
        <View style={Styles.checkoutButton}>
          <View style={Styles.checkoutButtonInnerContainer}>
            <SvgUri
              width="30"
              height="30"
              uri="https://raw.githubusercontent.com/cchirag/GitMath/master/Basket.svg"
              fill={theme.secondary}></SvgUri>
            <Text style={Styles.checkoutText}>Checkout</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color={theme.secondary}></MaterialIcons>
        </View>
      </TouchableWithoutFeedback>
      <View style={Styles.bottomContainer}>
        <Text style={Styles.addToCartText}>Add to Cart</Text>
        <ScrollView>
          {sensors.map((sensor) => (
            <SensorComponent
              key={sensor.id}
              image={sensor.image}
              name={sensor.name}
              price={sensor.price}
              addToCart={addToCart}
              removeFromCart={removeFromCart}></SensorComponent>
          ))}
        </ScrollView>
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
  peripheralsText: {
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
  addToCartText: {
    fontFamily: 'HelveticaNeue Thin',
    fontSize: 32,
    color: theme.primary,
    margin: 20,
  },
});

export default SensorScreen;
