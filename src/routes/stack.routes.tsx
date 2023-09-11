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

const Stack = createNativeStackNavigator();

type StackNavigator = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigator>;

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
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={PlantDetailScreen} />
      </Stack.Navigator>
    </>
  );
}

export default StackRoutes;
