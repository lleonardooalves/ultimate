import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";
import TabRoutes from "./tab.routes";

function Container() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}

export default Container;
