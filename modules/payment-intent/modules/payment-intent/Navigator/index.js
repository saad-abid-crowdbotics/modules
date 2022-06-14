import React from "react";
// @ts-ignore
import { createStackNavigator } from "@react-navigation/stack";
import CreatePaymentIntent from "../screens/CreatePaymentIntent";
import ConfirmPayment from "../screens/ConfirmPayment";

const Stack = createStackNavigator();

const Navigator = () => {
  return <Stack.Navigator screenOptions={{ headerStyle: { elevation: 0 }, cardStyle: { backgroundColor: "#fff" } }}>
    <Stack.Screen options={{ headerShown: false }} name="CreatePaymentIntent" component={CreatePaymentIntent} />
    <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} />
  </Stack.Navigator>;
};
export default Navigator;
