import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
// import Icon from "react-native-vector-icons/FontAwesome"

type iconProps = PropsWithChildren<{
    name:string
}>;

export default function Icons({name} : iconProps ) {
    {
        switch (name) {
         case "Yellow":
            // <Icon name="circle-thin" />
            return <View style={[styles.icon,styles.yellow]}></View>
         case "Green":
          //  <Icon name="times" />
          return<View style={[styles.icon,styles.green]}></View>
         default:
          //  <Icon name="pencil" />
          return <View style={styles.icon}></View>
        }  
 }
}

const styles = StyleSheet.create({
  icon:{
    backgroundColor:"#FC427B",
    padding:50,
    margin:3,
    borderRadius:30
  },
  yellow:{
    backgroundColor:"#f39c12",
    borderRadius:45
  },
  green:{
    backgroundColor:"#1abc9c",
    borderRadius:0

  }

})