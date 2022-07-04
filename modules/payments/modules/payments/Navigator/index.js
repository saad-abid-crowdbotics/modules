import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Payments from "../screens/Home";
import Setting from "../screens/Setting";
import { enableScreens } from "react-native-screens";
enableScreens();
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (

    <Stack.Navigator screenOptions={{ headerStyle: { elevation: 0 }, cardStyle: { backgroundColor: "#fff" } }}>
    <Stack.Screen options={{ headerShown: false }} name="Home" component={Setting} />
    <Stack.Screen name="Setting" component={Payments}/>
  </Stack.Navigator>

  );
};

export default Navigator;
