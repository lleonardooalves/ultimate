import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeTab from "../screens/HomeTab";
import FavoritesTab from "../screens/FavoritesTab";
import CartTab from "../screens/CartTab";

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60 },
        tabBarActiveTintColor: "#418B64",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: { margin: 7, fontSize: 14 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesTab}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cart"
        component={CartTab}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
