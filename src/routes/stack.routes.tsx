import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InitialScreen from "../screens/InitialScreen";

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
    </Stack.Navigator>
  );
}

export default StackRoutes;
