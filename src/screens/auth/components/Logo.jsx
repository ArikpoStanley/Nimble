import React from 'react'
import {View, Text, Image} from 'react-native'
import appLogo from '../../../../assets/img/appLogo.png'
const Logo = () => {
  return (
    <View style={{marginHorizontal: "auto", padding:6 }}>
    <Image source={appLogo} style={{height: 55, width:80}} alt='logo' />
    <Text style={{color: "white", textAlign: "center"}} > ...Nimble ... </Text>
    </View>
  )
}

export default Logo