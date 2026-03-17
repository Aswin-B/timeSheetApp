/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './routes/StackNav';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Details from './screens/Details';
import Home from './screens/Home';
import Profile from './screens/Profile';
import TimeSheetTab from './routes/TimeSheetTab';
import TimeSheetStack from './routes/TimeSheetStack';
import DrawerNav from './routes/DrawerNav';
import BottomTabNav from './routes/BottomTabNav';
import { Activity } from 'react';
import { ActivityProvider } from './context/ActivityContext';



const Drawer = createDrawerNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ActivityProvider>
        <NavigationContainer>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          {/* <DrawerNav/> */}
          <BottomTabNav/>
        </NavigationContainer>
      </ActivityProvider>
    </GestureHandlerRootView>
  );
}




export default App;
