import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

import HomeTab from "../screens/HomeTab";
import FavoritesTab from "../screens/FavoritesTab";
import CartTab from "../screens/CartTab";

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 70 },
        tabBarActiveTintColor: "#418B64",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 8,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesTab}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Icon name="favorite-border" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartTab}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Icon name="shopping-bag" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
