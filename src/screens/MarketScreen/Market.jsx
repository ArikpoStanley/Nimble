import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, View, Text, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Market = () => {
  return (
    <View style={{padding: 10}}>
        <Text style={{color: "white", textAlign: "center", fontWeight: "bold", fontSize:35}}>Wallet Details</Text>

        <View>
        <TouchableOpacity style={{marginTop: 20,  height: 60, borderBottomWidth: 1,  borderBottomColor: "#36454F",  justifyContent: "space-between"}}>
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <Text style={{color: "white", fontWeight: "bold", fontSize:25 }}>Create new wallet</Text>
        <FontAwesome name="angle-right" size={24} color="gray" />
        </View>
        <Text style={{color: "gray", fontWeight: "bold", fontSize:15}}>Click here if you do not have an existing crypto wallet account </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 20,  height: 60, borderBottomWidth: 1, borderBottomColor: "#36454F", justifyContent: "space-between"}}>
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <Text style={{color: "white", fontWeight: "bold", fontSize:25 }}>Add existing wallet</Text>
        <FontAwesome name="angle-right" size={24} color="gray" />
        </View>
        <Text style={{color: "gray", fontWeight: "bold", fontSize:15}}>Click here if you already have an existing crypto wallet account </Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Market