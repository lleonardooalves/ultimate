import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";
import AuthLogin from "../contexts/login";
import { CartProvider } from "../contexts/cartContext";
import { FavoritesProvider } from "../contexts/favoritesContext";

function Container() {
  return (
    <NavigationContainer>
      <CartProvider>
        <FavoritesProvider>
          <AuthLogin>
            <StackRoutes />
          </AuthLogin>
        </FavoritesProvider>
      </CartProvider>
    </NavigationContainer>
  );
}

export default Container;
