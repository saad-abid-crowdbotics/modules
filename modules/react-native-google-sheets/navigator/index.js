import React from "react";
// @ts-ignore
import { createStackNavigator } from "@react-navigation/stack";
import Authentication from "../screens/Authentication";
import MainScreen from "../screens/MainScreen";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { elevation: 0 },
        headerShown: false,
        cardStyle: { backgroundColor: "#fff" }
      }}
    >
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};
export default Navigator;
