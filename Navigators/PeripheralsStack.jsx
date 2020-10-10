import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SensorScreen from '../Screens/SensorScreen'
import CheckoutScreen from '../Screens/CheckoutScreen';

const Stack = createStackNavigator();

export default function PeripheralsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "SensorScreen" component = {SensorScreen}></Stack.Screen>
      <Stack.Screen name = "CheckoutScreen" component = {CheckoutScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
