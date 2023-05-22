/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import {createNativeStackNavigator} from '@react-navigation/native-stack'; 


import 'react-native-gesture-handler';

const Stack = createStackNavigator();

import { HomeScreen } from './screens/HomeScreen';
import { DrivingLicence } from './screens/DrivingLicence';
import { BlueBook } from './screens/BlueBook';
import { News } from './screens/News';




function App(){
return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DrivingLicence" component={DrivingLicence} />
          <Stack.Screen name="BlueBook" component={BlueBook} />
          <Stack.Screen name="News" component={News} />
        </Stack.Navigator>
      </NavigationContainer>
);
}

export default App;