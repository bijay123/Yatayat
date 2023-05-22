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
export function ScreenB(){
  const navigation =  useNavigation();
    return(
        <View>
          <Text> Screen B</Text>
          <Button style={styles.button}
          title="Go to A"
          onPress={() => navigation.navigate("ScreenA")}
          />
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
