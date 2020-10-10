import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import AuthenticationStack from './AuthenticationStack';
import AppDrawer from './AppDrawer';

const Stack = createStackNavigator();

export default function RootStack() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let isMounted = true;
    auth().onAuthStateChanged((user) => {
      if (user === null) {
        if (isMounted) {
          setCurrentUser(null);
        }
      } else {
        if (isMounted) {
          setCurrentUser(user);
        }
      }
    });

    return () => {
      isMounted = false;
    };
  }, [currentUser]);

  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      {currentUser === null ? (
        <Stack.Screen
          name="AuthenticationStack"
          component={AuthenticationStack}></Stack.Screen>
      ) : (
        <Stack.Screen name="AppDrawer" component={AppDrawer}></Stack.Screen>
      )}
    </Stack.Navigator>
  );
}
