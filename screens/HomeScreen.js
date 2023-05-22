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
  Image,
  onPress,
  Alert,
  alert,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export function HomeScreen() {

  const navigation = useNavigation();
  
   return(
          <View style ={styles.body}>
          <ScrollView>
            <View style ={styles.sectionHeader}>
                  <View style ={styles.logo_image_view}>
                    <Image style ={styles.logo_image} source={require('../img/gov-logo.png')} />
                  </View>
                  <View style ={styles.logo_header_view}> 
                    <Text style ={styles.sectionHeaderText} > 
                      Government of Nepal {"\n"}
                      Ministry of Physical Infrastructure and  {"\n"}
                      Transport Department of Transport {"\n"}Management {"\n"}
                      Minbhawan, Kathmandu {"\n"}
                    </Text>   
                </View>    
            </View>


            <View style = {styles.containerbox}>
              <View style ={styles.home_button_box}>
                  <Button  title="Driving Licence"  onPress={() => navigation.navigate("DrivingLicence")}/>
              </View>

              <View style ={styles.home_button_box}>
                  <Button style ={styles.home_Button} title="Blue Book" onPress={() => navigation.navigate("BlueBook")}/>
              </View>
              
            </View>

            <View style = {styles.containerbox}>
              <View style ={styles.home_button_box}>
                  <Button style ={styles.home_Button} title="Embossed Plate" onPress={() => navigation.navigate("BlueBook")}/>
              </View>
              <View style ={styles.home_button_box}>
                  <Button style ={styles.home_Button} title="Route Fare" onPress={() => navigation.navigate("BlueBook")}/>
              </View>

            </View>

            <View style = {styles.containerbox}>
              <View style ={styles.home_button_box}>
                  <Button style ={styles.home_Button} title="News & Press" onPress={() => navigation.navigate("News")} />
              </View>
              <View style ={styles.home_button_box}>
                  <Button style ={styles.home_Button} title="General Information" onPress={() => navigation.navigate("BlueBook")} />
              </View>

            </View>

        </ScrollView>
      </View>
       
   );
  }



  const styles = StyleSheet.create({

    body:{
      alignItems:'center',
      justifyContent:'center',
    },
    sectionHeader:{
      backgroundColor:'#5ADEFF',
      flexDirection:'row',
      width:'100%',
      paddingTop:15,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      backgroundColor:'#0000FF',
      color:'#FFFFFF',
    },
  
    containerbox: {
      width:'100%',
      flexDirection:'row',
      paddingTop:30,
      paddingRight:10,
  
    },
    home_button_box:{
      height:120,
      borderColor:'#FF0000',
      borderRadius:10,
      borderWidth:1,
      marginLeft:17,
      width:'45%',
      alignItems:'center',
      justifyContent:'center',
      shadowOpacity:.5,
      shadowColor:"#FF0000",
      shadowRadius:25,
    },
  
    home_Button:{
      color:'#FF0000',
    },
   
  
    sectionHeaderText:{
      textAlign:'left',
      fontSize:17,
      color:'#FFFFFF',
      paddingLeft:5
    },
  
    logo_image:{
     width:100,
     alignItems:'center',
      justifyContent:'center'
    },
    logo_image_view:{
      alignItems:'center',
      justifyContent:'center'
    },
    logo_header_view:{
      alignItems:'center',
      justifyContent:'center'
    },
    icon_size:{
      color:'#FFFFFF',
    }
  
  
  });