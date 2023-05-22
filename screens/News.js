import React, { useState} from 'react';

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
  FlatList,
  ActivityIndicator,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { types } from '@babel/core';
import { useEffect } from 'react';



const API_URL = 'http://epsnepal.gov.np/jobappform/webservice/epsnews'; //'https://mocki.io/v1/b0b04aa8-e763-410d-a99b-c02b42a132a3';


const indicator =()=>{
  return <ActivityIndicator size="large"></ActivityIndicator>
}

export function News(){
  const navigation =  useNavigation();
  const [loading, setLoading] = useState(true);
  //const [responce, setresponce] = useState();
  const[Items, setItems] = useState();
  const[error, setError] = useState();

  //console.log("testing");
  try {
    fetch(API_URL).then(res => res.json()).then(
      (result)=>{
        setLoading(false);
        setItems(result);
      }
    )
    /*
    return async dispatch =>{
      const results = await fetch(API_URL,{
                          method:'GET',
                          headers:{'Content-Type':'application/json', 'Accept': "application/json",}
                      });
      const json = await results.json();
      console.log(json);
      if(json){
        setItems(json)
      }else{
        console.log("Data not fetch");
      }
    }
    */
  } catch (error) {
    console.log(error);
    
  }

  

/*
  const[Items, setItems] = useState([
    { name:'Bijay','sortdesc':'This is test message for test purpose.'},
    { name:'Sanjay','sortdesc':'This is test message for test purpose.This is test message for test purpose.'},
    { name:'Manoj','sortdesc':'This is test message for test purpose.'},
    { name:'Ashok','sortdesc':'This is test message for test purpose.'},
    { name:'Bijay','sortdesc':'This is test message for test purpose.'},
    { name:'Sanjay','sortdesc':'This is test message for test purpose.This is test message for test purpose.'},
    { name:'Manoj','sortdesc':'This is test message for test purpose.'},
    { name:'Ashok','sortdesc':'This is test message for test purpose.'},
  ]);


  */

    return(
    
      <FlatList keyExtractor={(item,index) => index.toString()} data={Items} renderItem={({item}) => (
        <View style = {styles.rowbox}>
            <Text style = {styles.sectionTitle}>{item.post_title}</Text>
        </View>
      )} />  

    );
   }


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  shortdesc:{
    fontSize: 18,
    fontWeight: '400',
  },

  rowbox:{
    backgroundColor:'#007bff',
    color:'#FFF',
    marginBottom:5,
    padding:10,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    alignItems:'center',
    textAlign:'center',
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
