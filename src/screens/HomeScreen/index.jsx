import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, View, Text, Image, TouchableOpacity } from "react-native";
import CoinItem from "../../components/CoinItem";
import { getMarketData } from "../../services/requests";
import Feather from '@expo/vector-icons/Feather';
import withdraw from '../../../assets/withdraw.png'
import send from '../../../assets/send.png'
const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async (pageNumber) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setCoins((existingCoins) => {
      // If existingCoins is undefined or null, use an empty array
      return [...(existingCoins || []), ...coinsData];
    });
    setLoading(false);
  };

  const refetchCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData();
    setCoins(coinsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <View>
      <View style={{backgroundColor: "#252535", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, height: 155, padding: 10}}>
        <Text style={{color: "white", color:"gray"}}>Your Wallet</Text>
        <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <Text style={{color: "gray", padding:5, fontWeight: "bold", }}>$</Text>
        <Text style={{color: "white", padding:5, fontSize:30, fontWeight: "bold", }}>473,982,320</Text>
        <Text style={{color: "gray", fontWeight: "bold", }}>USD</Text>
        </View>
        <View style={{display: "flex", flexDirection: "row", gap: 2, alignItems: "center"}}>
        <Feather name="arrow-down-left" size={20} color="red" />
        <Text style={{color: "gray", fontWeight: "bold", fontSize: 18}}>2.57</Text>
        <Text style={{color: "gray", fontWeight: "bold", fontSize: 18}}>7d Change</Text>
        </View>
        <View style={{marginTop: 20,  display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <TouchableOpacity style={{display: "flex", flexDirection: "row", gap: 5, alignItems: "center",  backgroundColor: "#fff", borderRadius: 20, paddingVertical: 8, paddingHorizontal: 30}}>
            <Image source={send} style={{width: 20, height: 20, }} />
            <Text style={{color: "black", fontSize: 25, fontWeight: "bold"}}>Transfer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{display: "flex", flexDirection: "row", gap: 5, alignItems: "center",  backgroundColor: "#fff", borderRadius: 20, paddingVertical: 8, paddingHorizontal: 30}}>
            <Image source={withdraw} style={{width: 20, height: 20, }} />
            <Text style={{color: "black", fontSize: 25, fontWeight: "bold"}}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{ fontFamily: 'DroidSans', color: "white", fontSize: 25, letterSpacing: 1, paddingHorizontal: 20, paddingBottom: 5 }}>Cryptoassets</Text>
        <Text style={{color: 'lightgrey', fontSize: 12, paddingHorizontal: 10,}}>Powered by Nimble</Text>
      </View>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
        onEndReached={() => fetchCoins(coins.length / 50 + 1)}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor="white"
            onRefresh={refetchCoins}
          />
        }
      />
    </View>
  );
};

export default HomeScreen;
