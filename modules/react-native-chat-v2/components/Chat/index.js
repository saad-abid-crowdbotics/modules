import React, { useEffect, useLayoutEffect } from 'react';
// @ts-ignore
import { Actions, GiftedChat } from 'react-native-gifted-chat';
// @ts-ignore
import { usePubNub } from 'pubnub-react';

const Chat = ({ route, navigation }) => {
  const client = usePubNub();
  const messages = [];

  useEffect(() => {
    console.log(route.params)
    navigation.setOptions({
      title: route.params.title
  });
  }, [navigation, route])

  const onSend = (messages) => {
    client.publish({ channel: route.params.id, message: {text: messages[0].text}}, (status, response) => {
      console.log(status);
      console.log(response);
    })
    
  };

  const pickImage = () => {
  };

  return (
    <GiftedChat
      isLoadingEarlier={true}
      messages={messages}
      renderUsernameOnMessage={true}
      onSend={onSend}
      // @ts-ignore
      renderActions={() => <Actions onPressActionButton={pickImage}/>} user={"user_3c4400761cba4b65b77b6cae55fc21eb"}
    />
  )
}
export default Chat