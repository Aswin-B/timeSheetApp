import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TimeSheetTab from './TimeSheetTab';

const Stack = createNativeStackNavigator();

const TimeSheetStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='TimeSheet' component={TimeSheetTab} />
    </Stack.Navigator>
  )
}

export default TimeSheetStack