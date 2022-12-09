<<<<<<< HEAD
import React from 'react';
import { View, Text, Pressable } from 'react-native';
// @ts-ignore
import { createStackNavigator } from "@react-navigation/stack"
import Conversation from '../Screens/Conversation';
import CreateChannel from '../Screens/CreateChannel';
import ChannelDetails from '../Screens/ChannelDetails';
import EditChannelDetails from '../Screens/EditChannelDetails';
import AddMember from '../Screens/AddMember';
import options from '../options'
import Chat from '../Screens/Chat';
import CreateDirectChannel from '../Screens/CreateDirectChannel';
=======
import React from "react";
import { View, Text, Pressable } from "react-native";
// @ts-ignore
import { createStackNavigator } from "@react-navigation/stack";
import Conversation from "../Screens/Conversation";
import CreateChannel from "../Screens/CreateChannel";
import ChannelDetails from "../Screens/ChannelDetails";
import EditChannelDetails from "../Screens/EditChannelDetails";
import AddMember from "../Screens/AddMember";
import options from "../options";
import Chat from "../Screens/Chat";
import CreateDirectChannel from "../Screens/CreateDirectChannel";
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527

const Stack = createStackNavigator();

const Navigator = () => {
  return <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false }} name="Channels" component={Conversation} />
    <Stack.Screen name="Channel" component={Chat}
      options={({ navigation, route }) => ({
        headerRight: () => <View style={options.NavigationStyle.headerRight}>
<<<<<<< HEAD
          <Pressable onPress={() => navigation.navigate('ChannelDetails', { item: route.params.item })}>
=======
          <Pressable onPress={() => navigation.navigate("ChannelDetails", { item: route.params.item })}>
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
            <Text>Details</Text>
          </Pressable>
        </View>
      })}
    />
    <Stack.Screen name="ChannelDetails" component={ChannelDetails} options={({ navigation, route }) => ({
      headerRight: () => <View style={options.NavigationStyle.headerRight}>
<<<<<<< HEAD
        <Pressable onPress={() => navigation.navigate('EditChannelDetails', { item: route.params.item })}>
=======
        <Pressable onPress={() => navigation.navigate("EditChannelDetails", { item: route.params.item })}>
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
          <Text>Edit</Text>
        </Pressable>
      </View>
    })} />
<<<<<<< HEAD
    <Stack.Screen name="CreateDirectChannel" component={CreateDirectChannel} options={{ title: "New chat"}} />
    <Stack.Screen name="EditChannelDetails" options={{ title: 'Edit' }} component={EditChannelDetails} />
    <Stack.Screen name="CreateChannel" component={CreateChannel} options={{ title: 'New Group' }} />
    <Stack.Screen name="AddMember" component={AddMember} options={{ title: 'Contacts' }} />
  </Stack.Navigator>;
};
export default Navigator
=======
    <Stack.Screen name="CreateDirectChannel" component={CreateDirectChannel} options={{ title: "New chat" }} />
    <Stack.Screen name="EditChannelDetails" options={{ title: "Edit" }} component={EditChannelDetails} />
    <Stack.Screen name="CreateChannel" component={CreateChannel} options={{ title: "New Group" }} />
    <Stack.Screen name="AddMember" component={AddMember} options={{ title: "Contacts" }} />
  </Stack.Navigator>;
};
export default Navigator;
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
