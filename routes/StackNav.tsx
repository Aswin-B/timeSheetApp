import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from '../screens/User';
import Profile from '../screens/Profile';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{
        
        headerStyle: {
            backgroundColor: 'orange'
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        // headerShown: false
        
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  )
}

export default StackNav