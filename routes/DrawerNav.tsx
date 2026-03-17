import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TimeSheetTab from './TimeSheetTab';
import Details from '../screens/Details';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: 'red'
          },
          headerTintColor: '#fff',
          headerShown: false
        }}>
        <Drawer.Screen name="TimeSheet" component={TimeSheetTab} />
        <Drawer.Screen name="Details" component={Details} options={{
            headerShown: false,
            
          }}/>
    </Drawer.Navigator>
  )
}

export default DrawerNav