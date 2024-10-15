import React from 'react'
import {View, Text, Image} from 'react-native'

const TabIcon = ({focused, icon, isTrade}) => {
    if(isTrade){
        return (
            <View>
                <Text style={{color: "white"}}>Trade</Text>
            </View>
          )
    }
    else{
        return (
            <View>
                <Text style={{color: "white"}}>not trade</Text>
            </View>
          )
    }
 
}

export default TabIcon