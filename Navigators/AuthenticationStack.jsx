import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import IntroScreen from '../Screens/IntroScreen'
import AuthenticationScreen from '../Screens/AuthenticationScreen'

const Stack = createStackNavigator();

export default function AuthenticationStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = "IntroScreen" component = {IntroScreen}></Stack.Screen>
            <Stack.Screen name = "AuthenticationScreen" component = {AuthenticationScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}