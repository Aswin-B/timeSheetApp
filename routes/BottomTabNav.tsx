import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';
import DrawerNav from './DrawerNav';
import Account from '../screens/Account';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
            let iconName = '';
            if(route.name === "Home"){
               iconName =  focused ? 'home' : 'home-outline'
            }
            else if(route.name === "Settings"){
                iconName = focused ? 'settings' : 'settings-outline'
            }
            else if(route.name === "Account"){
                iconName = focused ? 'person' : 'person-outline'
        }
        return <Icon name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
    })}>
        <Tab.Screen name="Home" component={DrawerNav}/>
        <Tab.Screen name="Settings" component={Settings} options={{
            headerShown: true,
            headerStyle: {
                backgroundColor: 'red'
            },
            headerTintColor: '#fff',
            // tabBarIcon: () => (
            //     <Icon name="settings" size={24} color="black"/>
            // )
        }}/>
        <Tab.Screen name="Account" component={Account} options={{
            headerShown: true,
            headerStyle: {
                backgroundColor: 'red'
            },
            headerTintColor: '#fff',
            // tabBarIcon: () => (
            //     <Icon name="person" size={24} color="black"/>
            // )
        }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNav