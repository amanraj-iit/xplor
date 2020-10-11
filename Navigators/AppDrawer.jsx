import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import PeripheralsStack from './PeripheralsStack';
import DrawerContentComponent from '../Components/DrawerContentComponent';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContentComponent {...props}></DrawerContentComponent>
      )}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen}></Drawer.Screen>
      <Drawer.Screen
        name="PeripheralsStack"
        component={PeripheralsStack}></Drawer.Screen>
    </Drawer.Navigator>
  );
}
