import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import WatchlistScreen from "../screens/WatchlistScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import { Image } from "react-native";
import { Entypo, FontAwesome, Foundation } from "@expo/vector-icons";
import Market from "../screens/MarketScreen/Market";
import Profile from "../screens/Profile/Profile";
import trade from "../../assets/trade.png"
import home from "../../assets/home.png"
import profile from "../../assets/profile.png"
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#252535",
          height: 80,
          paddingBottom: 20
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image 
            source={home}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: focused ? "white" : "gray",
              backgroundColor: "black",
              padding: 20,
              borderRadius: 20,
            }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Foundation name="graph-pie" size={focused ? 35 : 30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image 
            source={trade}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              tintColor: focused ? "white" : "gray",
              backgroundColor: "black",
              padding: 20,
              borderRadius: 20
            }}
            />
            // <Foundation name="graph-pie" size={focused ? 35 : 30} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Watchlist"
        component={WatchlistScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="star" size={focused ? 30 : 25} color={color}/>
          ),
        }}
      />
        <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image 
            source={profile}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              tintColor: focused ? "white" : "gray",
              backgroundColor: "black",
              padding: 20,
              borderRadius: 20
            }}
            />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
