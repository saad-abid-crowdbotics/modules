import React, { useEffect } from 'react';
import PubNub from "pubnub";
// @ts-ignore
import { PubNubProvider } from "pubnub-react";
import options from "./options"
import users from "./data/users.json";
// import "./style.module.scss"
import Navigator from './Navigator';
import { AppState } from 'react-native';
import listener from './src/model';

const App = () => {
  // const uuid = users[Math.floor(Math.random() * users.length)].id
  const uuid = "user_3c4400761cba4b65b77b6cae55fc21eb"
  const client = new PubNub({
    publishKey: options.SUB_KEY,
    subscribeKey: options.PUB_KEY,
    uuid: uuid,
    restore: true
  });

  useEffect(() => {
    AppState.addEventListener('change', (nextState) => {
        if (nextState.match(/inactive|background/)) {
            client.unsubscribeAll();
        }
    });
    client.subscribe({
        channelGroups: [uuid],
        withPresence: true
    });
    return () => client.unsubscribeAll()
  }, []);

  return (
    <React.StrictMode>
      <PubNubProvider client={client}>
        <Navigator />
      </PubNubProvider>
    </React.StrictMode>
  )
}

export default {
  title: "Chat",
  navigator: App
}
