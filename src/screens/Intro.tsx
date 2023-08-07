import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"

export default function Intro() {
    const navigation = useNavigation()
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
      <Image source={require("../assets/images/logo.png")} style={{height:130,width:180}} />
      <TouchableOpacity onPress={()=> navigation.navigate("Home") }>
        <Text style={{backgroundColor:"#4a69bd",color:"white",padding:15,fontSize:20,borderRadius:35}}>Lets Play!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})