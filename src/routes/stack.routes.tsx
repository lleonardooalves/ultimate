import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import InitialScreen from "../screens/InitialScreen";
import TabRoutes from "./tab.routes";
import { StatusBar } from "expo-status-bar";
import SignInScreen from "../screens/SignIn";
import SignUpScreen from "../screens/SignUp";
import PlantDetailScreen from "../screens/PlantDetailScreen";
import { ButtonFavorites } from "../styles/detailsScreenStyle";
import Icon from "react-native-vector-icons/MaterialIcons";
import FavoritesContext, { useFav } from "../contexts/favoritesContext";
import { useContext } from "react";
import { useRoute } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  categoryId: string;
  image: string;
}

type StackNavigator = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Details: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigator>;

function StackRoutes() {
  const { addToFav } = useFav();

  function handleAddToFavs(item: Product) {
    addToFav(item);
  }
  return (
    <>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen
          name="InitialScreen"
          component={InitialScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={TabRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign In"
          component={SignInScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Details"
          component={PlantDetailScreen}
          options={{
            headerTitleAlign: "center",
            headerRight: () => (
              <ButtonFavorites>
                <Icon name="favorite-border" size={25} />
              </ButtonFavorites>
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
}

export default StackRoutes;
