import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login';
import BottomTabNav from './BottomTabNav';

const RootStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Main' component={BottomTabNav} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default RootStack