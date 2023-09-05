import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import InitialScreen from "../screens/InitialScreen";
import TabRoutes from "./tab.routes";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function StackRoutes() {
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
      </Stack.Navigator>
    </>
  );
}

export default StackRoutes;
