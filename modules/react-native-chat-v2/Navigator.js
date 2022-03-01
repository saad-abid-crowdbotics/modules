import React from 'react';
import { Button, View } from 'react-native';
// @ts-ignore
import { createStackNavigator } from "@react-navigation/stack"
import ConversationList from './components/ConversationList';
import Chat from './components/Chat';

const Stack = createStackNavigator();
export default () => {
    return (
    <Stack.Navigator>
      <Stack.Screen name="ConversationList" component={ConversationList} options={{ title: 'Conversation List' }}/>
      <Stack.Screen name="Chat" component={Chat} options={({ route }) => ({ title: route.params?.title ?? 'Chat' })}/>
      {/* <Stack.Screen name="Channel" component={Channel} options={({ navigation, route }) => ({
            headerRight: () => <View style={NavigationStyle.headerRight}>
                <Button onPress={() => navigation.navigate('ChannelDetails', { item: route.params.item })} title="Details"/>
                </View>
        })}/>
      <Stack.Screen name="ChannelDetails" component={ChannelDetails} options={({ navigation, route }) => ({
            headerRight: () => <View style={NavigationStyle.headerRight}>
                <Button title="Edit" onPress={() => navigation.navigate('EditChannelDetails', { item: route.params.item })}/>
                </View>
        })}/>
      <Stack.Screen name="EditChannelDetails" options={{
            title: 'Edit'
        }} component={EditChannelDetails}/>
      <Stack.Screen name="Contacts" component={Contacts} options={({ route }) => ({ title: route.params?.title ?? 'Create' })}/>
      <Stack.Screen name="CreateChannel" component={CreateChannel} options={{ title: 'New Group' }}/>
      <Stack.Screen name="CreateChannelDetails" component={CreateChannelDetails} options={{ title: 'New Group' }}/>
      <Stack.Screen name="AddMember" component={AddMember} options={{ title: 'Contacts' }}/> */}
    </Stack.Navigator>

    )
};
