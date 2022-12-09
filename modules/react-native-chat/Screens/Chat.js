<<<<<<< HEAD
import React, { useLayoutEffect, useEffect, useState } from 'react';
import { user, useStore } from '../Store/store';
// @ts-ignore
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat';
// @ts-ignore
import { usePubNub } from 'pubnub-react';
import { cloneArray, getUrl, loadHistory, sortArray } from '../utils';
// @ts-ignore
import { launchImageLibrary } from 'react-native-image-picker';
import { StyleSheet, Image } from 'react-native';
=======
import React, { useLayoutEffect, useEffect, useState } from "react";
import { user, useStore } from "../Store";
// @ts-ignore
import { GiftedChat, InputToolbar } from "react-native-gifted-chat";
// @ts-ignore
import { usePubNub } from "pubnub-react";
import { cloneArray, getUrl, loadHistory, sendMessage, sortArray } from "../utils";
// @ts-ignore
import { launchImageLibrary } from "react-native-image-picker";
import { StyleSheet, Image, View, Text } from "react-native";
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
import {
  Menu,
  MenuOptions,
  MenuOption,
<<<<<<< HEAD
  MenuTrigger,
} from 'react-native-popup-menu';

import { View, Text } from 'react-native';
import Video from 'react-native-video';
=======
  MenuTrigger
} from "react-native-popup-menu";

import Video from "react-native-video";
// @ts-ignore
import EmojiSelector from "react-native-emoji-selector";

>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
const Chat = ({ route, navigation }) => {
  const pubnub = usePubNub();
  const { state, dispatch } = useStore();
  const { item } = route.params;
<<<<<<< HEAD
  const [messages, setMessages] = useState(state.messages[item.id] || [])
  const channel = state.channels[route.params.item.id];

  useEffect(() => {
    pubnub.fetchMessages({
      channels: [item.id],
    },
      (status, response) => {
        if (response) {
          const messages = response.channels[item.id].map(obj => obj.message)
          state.messages[item.id] = loadHistory(messages)
=======
  const [messages, setMessages] = useState(state.messages[item.id] || []);
  const channel = state.channels[route.params.item.id];
  const [actionSheet, setActionSheet] = useState(false);
  const [textInput, setTextInput] = useState(null);

  useEffect(() => {
    pubnub.fetchMessages(
      {
        channels: [item.id]
      },
      (_, response) => {
        if (response) {
          const messages = response.channels[item.id].map((obj) => obj.message);
          state.messages[item.id] = loadHistory(messages);
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
          dispatch({ messages: state.messages });
        }
      }
    );
<<<<<<< HEAD
  }, [item.id])


  useEffect(() => {
    setMessages(state.messages[item.id] || [])
  }, [state.messages[item.id]])
=======
  }, [item.id]);

  useEffect(() => {
    setMessages(state.messages[item.id] || []);
  }, [state.messages[item.id]]);
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527

  useEffect(() => {
    pubnub.setState({
      state: {
        last_seen: new Date().getTime()
      },
<<<<<<< HEAD
      channels: [item.id],
    });

  })
=======
      channels: [item.id]
    });
  });
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527

  useLayoutEffect(() => {
    navigation.setOptions({
      title: channel?.name
    });
  }, [navigation, channel]);

  const pickImage = () => {
<<<<<<< HEAD
    launchImageLibrary({ mediaType: "photo" }).then(res => {
      if (res?.didCancel)
        return

      if (res.assets[0].fileSize > 4900000) {
        alert("File size must be less then 5mb.")
        return
      }
      const tmpMessages = cloneArray(messages)
      tmpMessages.push({ image: res.assets[0].uri, pending: true, user: user })
      setMessages(tmpMessages)
=======
    launchImageLibrary({ mediaType: "photo" }).then((res) => {
      if (res?.didCancel) {
        return;
      }

      if (res.assets[0].fileSize > 4900000) {
        alert("File size must be less then 5mb.");
        return;
      }
      const tmpMessages = cloneArray(messages);
      tmpMessages.push({ image: res.assets[0].uri, pending: true, user: user });
      setMessages(tmpMessages);
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
      pubnub.sendFile({
        channel: item.id,
        message: {
          createdAt: new Date(),
          user: user,
          type: "image"
        },
        file: {
          uri: res.assets[0].uri,
          name: res.assets[0].fileName,
<<<<<<< HEAD
          mimeType: res.assets[0].type,
        },
      });
    })
  };

  const pickVideo = () => {
    launchImageLibrary({ mediaType: "video" }).then(res => {
      if (res?.didCancel)
        return


      if (res.assets[0].fileSize > 4900000) {
        alert("File size must be less then 5mb.")
        return
      }

      getUrl(res.assets[0].uri, res.assets[0].fileName).then(uri => {
        const tmpMessages = cloneArray(messages)
        tmpMessages.push({ video: uri, pending: true, user: user })
        setMessages(tmpMessages)
        pubnub.sendFile({
          channel: item.id,
          message: {
            createdAt: new Date(),
            user: user,
            type: "video"
          },
          file: {
            uri: res.assets[0].uri,
            name: res.assets[0].fileName,
            mimeType: res.assets[0].type,
          }
        }, (status, response) => {
          console.log(status);
          console.log(response);
        });
      })

    })
=======
          mimeType: res.assets[0].type
        }
      });
    });
  };

  const pickVideo = () => {
    launchImageLibrary({ mediaType: "video" }).then((res) => {
      if (res?.didCancel) {
        return;
      }

      if (res.assets[0].fileSize > 4900000) {
        alert("File size must be less then 5mb.");
        return;
      }

      getUrl(res.assets[0].uri, res.assets[0].fileName).then((uri) => {
        const tmpMessages = cloneArray(messages);
        tmpMessages.push({ video: uri, pending: true, user: user });
        setMessages(tmpMessages);
        pubnub.sendFile(
          {
            channel: item.id,
            message: {
              createdAt: new Date(),
              user: user,
              type: "video"
            },
            file: {
              uri: res.assets[0].uri,
              name: res.assets[0].fileName,
              mimeType: res.assets[0].type
            }
          },
          (status, response) => {
            console.log(status);
            console.log(response);
          }
        );
      });
    });
  };

  const pickEmoji = () => {
    setActionSheet(true);
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
  };

  const actions = () => {
    return (
      <Menu>
        <MenuTrigger customStyles={{ triggerWrapper: styles.triggerWrapper }}>
<<<<<<< HEAD
          <Text style={{ fontSize: 25, marginTop: -4, color: "gray" }}>+</Text>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={{ marginTop: -40, marginLeft: 5 }}>
          <MenuOption onSelect={() => pickImage()} text='Image' />
          <View style={{ borderBottomColor: "lightgray", borderBottomWidth: 1 }} />
          <MenuOption onSelect={() => pickVideo()} text='Video' />
        </MenuOptions>
      </Menu>
    )
  }

  const onSend = (message) => {
    const tmpMessages = cloneArray(messages)
    tmpMessages.push({ text: message[0].text, pending: true, user: user })
    setMessages(tmpMessages)
    pubnub.publish({ channel: item.id, message: message[0] }, (status, response) => {
      console.log(status);
      console.log(response);
    });
=======
          <Text style={styles.PlusContainer}>+</Text>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.OptionContainer}>
          <MenuOption onSelect={pickEmoji} text="Emoji" />
          <View style={styles.border} />
          <MenuOption onSelect={() => pickImage()} text="Image" />
          <View style={styles.border} />
          <MenuOption onSelect={() => pickVideo()} text="Video" />
        </MenuOptions>
      </Menu>
    );
  };

  const onSend = (message) => {
    setActionSheet(false);
    const tmpMessages = cloneArray(messages);
    tmpMessages.push({ text: message[0].text, pending: true, user: user });
    setMessages(tmpMessages);
    setTextInput(null);
    sendMessage(pubnub, item.id, message[0]).then(res => console.log(res));
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
  };

  const renderMessageVideo = (props) => {
    const { currentMessage } = props;
<<<<<<< HEAD
    let result = ""
    try {
      result = pubnub.getFileUrl({ channel: item.id, id: currentMessage._id, name: ("name" in currentMessage) ? currentMessage.name : currentMessage.video });
    } catch (error) {
      result = currentMessage.video
    }

    return (
      <View style={{ padding: 5 }}>
        <Video resizeMode="contain" source={{ uri: result }} style={{ width: 200, height: 120 }} />
      </View>
    );
  }

  const renderMessageImage = (props) => {
    const { currentMessage } = props;
    let result = ""
    try {
      result = pubnub.getFileUrl({ channel: item.id, id: currentMessage._id, name: ("name" in currentMessage) ? currentMessage.name : currentMessage.image });
    } catch (error) {
      result = currentMessage.image
    }
    return (
      <View style={{ padding: 5 }}>
        <Image
          style={{ width: 200, height: 120 }}
=======
    let result = "";
    try {
      result = pubnub.getFileUrl({
        channel: item.id,
        id: currentMessage._id,
        name:
          "name" in currentMessage ? currentMessage.name : currentMessage.video
      });
    } catch (error) {
      result = currentMessage.video;
    }

    return (
      <View style={styles.P5}>
        <Video
          resizeMode="contain"
          source={{ uri: result }}
          style={styles.VideoContainer}
        />
      </View>
    );
  };

  const renderMessageImage = (props) => {
    const { currentMessage } = props;
    let result = "";
    try {
      result = pubnub.getFileUrl({
        channel: item.id,
        id: currentMessage._id,
        name:
          "name" in currentMessage ? currentMessage.name : currentMessage.image
      });
    } catch (error) {
      result = currentMessage.image;
    }
    return (
      <View style={styles.P5}>
        <Image
          style={styles.ImageContainer}
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
          resizeMode="cover"
          source={{
            uri: result
          }}
        />
      </View>
    );
<<<<<<< HEAD
  }
  return <GiftedChat listViewProps={styles.Container} isLoadingEarlier={true} renderMessageImage={renderMessageImage} renderMessageVideo={renderMessageVideo} messages={sortArray(messages)} renderUsernameOnMessage={true} onSend={onSend} renderInputToolbar={(props) => {return <InputToolbar {...props} containerStyle={styles.inputToolbar} />}} renderActions={() => actions()} user={user} />;
    
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white'
=======
  };

  const onEmojiSelected = (emoji) => {
    setTextInput(emoji);
  };

  return (
    <>
      <GiftedChat
        text={textInput}
        onInputTextChanged={(text) => setTextInput(text)}
        listViewProps={styles.Container}
        isLoadingEarlier={true}
        renderMessageImage={renderMessageImage}
        renderMessageVideo={renderMessageVideo}
        messages={sortArray(messages)}
        renderUsernameOnMessage={true}
        onSend={onSend}
        renderInputToolbar={(props) => {
          return (
            <InputToolbar {...props} textInputStyle={styles.inputToolbar} />
          );
        }}
        renderActions={() => actions()}
        user={user}
      />
      {actionSheet && (
        <EmojiSelector onEmojiSelected={(emoji) => onEmojiSelected(emoji)} />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white"
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
  },
  triggerWrapper: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    width: 30,
    height: 30,
    marginLeft: 5,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15
  },
  inputToolbar: {
<<<<<<< HEAD
    color: "black"
  }
})
export default Chat
=======
    color: "#000"
  },
  PlusContainer: {
    fontSize: 25,
    marginTop: -4,
    color: "gray"
  },
  OptionContainer: {
    marginTop: -40,
    marginLeft: 5
  },
  border: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1
  },
  P5: {
    padding: 5
  },
  VideoContainer: {
    width: 200,
    height: 120
  },
  ImageContainer: {
    width: 200,
    height: 120
  }
});
export default Chat;
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
