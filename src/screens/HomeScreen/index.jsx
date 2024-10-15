import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, View, Text } from "react-native";
import CoinItem from "../../components/CoinItem";
import { getMarketData } from "../../services/requests";

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async (pageNumber) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setCoins((existingCoins) => [...existingCoins, ...coinsData]);
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
      <View style={{backgroundColor: "#252535", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, height: 150, padding: 10}}>
        <Text style={{color: "white", color:"gray"}}>Your Wallet</Text>
        <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <Text style={{color: "gray", padding:5, fontWeight: "bold", }}>$</Text>
        <Text style={{color: "white", padding:5, fontSize:30, fontWeight: "bold", }}>473,982,320</Text>
        <Text style={{color: "gray", fontWeight: "bold", }}>USD</Text>
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
