import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import LeaveHistory from '../screens/LeaveHistory';
import RaisedRequest from '../screens/RaisedRequest';
import PendingLeaves from '../screens/PendingLeaves';
import SubmittedActivity from '../screens/SubmittedActivity';
import Header from '../screens/Header';

const Tab = createMaterialTopTabNavigator();

const TimeSheetTab = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <Tab.Navigator screenOptions={{
            tabBarScrollEnabled: true,
            tabBarStyle: {
                backgroundColor: 'red'
            },
            tabBarIndicatorStyle: {
                backgroundColor: 'red'
            },
            tabBarActiveTintColor: '#fff',
        }}>
            <Tab.Screen name="SubmittedActivity" component={SubmittedActivity} options={{title: 'Submitted Activity'}}/>
            <Tab.Screen name="PendingLeaves" component={PendingLeaves} options={{title: 'Pending Activity'}}/>
            <Tab.Screen name="RaisedRequest" component={RaisedRequest} options={{title: 'Raised Request'}}/>
            <Tab.Screen name="LeaveHistory" component={LeaveHistory} options={{title: 'Leave History'}}/>
        </Tab.Navigator>
    </View>
  )
}

export default TimeSheetTab