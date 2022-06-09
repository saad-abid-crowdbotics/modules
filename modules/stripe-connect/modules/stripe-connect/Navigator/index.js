import React from "react";
// @ts-ignore
import { createStackNavigator } from "@react-navigation/stack";
import Sellers from "../Screens/sellers";
import Home from "../Screens/home";
import SellerRegistration from "../Screens/sellerRegistration";
import Products from "../Screens/products";
import CreateProduct from "../Screens/createProduct";
const Stack = createStackNavigator();

const Navigator = () => {
  return <Stack.Navigator screenOptions={{ headerStyle: { elevation: 0 }, cardStyle: { backgroundColor: "#fff" } }}>
    <Stack.Screen options={{ headerShown: false }} name="home" component={Home} />
    <Stack.Screen name="sellers" component={Sellers} />
    <Stack.Screen name="seller-registration" component={SellerRegistration} />
    <Stack.Screen name="products" component={Products} />
    <Stack.Screen name="create-product" component={CreateProduct} />
  </Stack.Navigator>;
};
export default Navigator;
