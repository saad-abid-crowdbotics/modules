import React from "react";
// @ts-ignore
import { createStackNavigator } from "@react-navigation/stack";
import ChatList from "../Screens/ChatList";
import Chat from "../Screens/Chat";
import CreateGroup from "../Screens/CreateGroup";

const Stack = createStackNavigator();

const Navigator = () => {
  return <Stack.Navigator>
    <Stack.Screen name="ChatList" component={ChatList} />
    <Stack.Screen name="Chat" component={Chat} />
    <Stack.Screen name="CreateGroup" component={CreateGroup} />
  </Stack.Navigator>;
};
export default Navigator;
