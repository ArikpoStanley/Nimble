import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import google from '../../../../assets/img/google.png'
import apple from '../../../../assets/img/apple.png'
const LoginOptions = ({action}) => {
  return (
    <View style={{ display: "flex", flexDirection: 'column', gap: 30 }}>
    <TouchableOpacity style={styles.button1}>
      <Image source={google} style={{ height: 20, width: 15, marginRight: 10 }} />
      <Text style={{ color: "white", fontSize: 20, textAlign: 'center' }}>
        {action} with Google
      </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button1}>
      <Image source={apple} style={{ height: 20, width: 15, marginRight: 10 }} />
      <Text style={{ color: "white", fontSize: 20, textAlign: 'center' }}>
        {action} with Apple
      </Text>
    </TouchableOpacity>
  </View>
  )
}
const styles = StyleSheet.create({
    button1: {
        display: "flex", 
        flexDirection: 'row', 
        borderRadius: 20, 
        backgroundColor: "#40465B", 
        alignSelf: "center",  
        paddingHorizontal: 65,
        paddingVertical: 5, 
        alignItems: "center",
      },
  });
export default LoginOptions