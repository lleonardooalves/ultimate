import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";
import AuthLogin from "../contexts/login";

function Container() {
  return (
    <NavigationContainer>
      <AuthLogin>
        <StackRoutes />
      </AuthLogin>
    </NavigationContainer>
  );
}

export default Container;
