import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native'
import Logo from '../components/Logo'
import CustomInput from '../components/Input'
import Line from '../components/Line'
import LoginOptions from '../components/LoginOptions'

const Signup = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.container}> 
    {/* <Logo /> */}
    <Text style={styles.text}>Sign Up</Text>
    <CustomInput placeholder="Username" iconName="user-circle-o"/>
    <CustomInput placeholder="Email address" iconName="at"/>
    <CustomInput placeholder="Phone number" iconName="phone"/>
    <CustomInput placeholder="Password" iconName="key"/>
    <View style={{marginTop: 40}}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Otp')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    <Line />
    <LoginOptions action="Sign up" />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    paddingTop: 50, 
    backgroundColor: "#000", 
    paddingHorizontal: 20,
  },
  text:{
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: '#252535',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: "#fff",
    borderWidth: 1
  },
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
  buttonText: {
    color: '#fff',
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold"
  },
});

export default Signup