import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  onPress,
  Alert,
  alert,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export function BlueBook(){
  const navigation =  useNavigation();
    return(
        <View>
          <Text> Blue Book </Text>
         
        </View>
    );
   }


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button:{
      width:'50%',
      height:50,
      backgroundColor:'#FF0000',
    },
});
