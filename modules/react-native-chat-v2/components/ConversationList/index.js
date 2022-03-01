import React, { useState, useEffect } from "react";
// @ts-ignore
import { usePubNub } from "pubnub-react";

// import "emoji-mart/css/emoji-mart.css";

import rawUsers from "../../data/users.json";
import rawMessages from "../../data/messages-social.json";
import socialChannels from "../../data/channels-social.json";
import directChannels from "../../data/channels-direct.json";
import { View, Text, Image, StyleSheet, ScrollView, Pressable, TouchableOpacity } from "react-native";
// import styles from "../../../../demo/modules/chat/src/styles";
// @ts-ignore
const users = rawUsers;
// @ts-ignore
const socialChannelList = socialChannels;
// @ts-ignore
const directChannelList = directChannels;
const allChannelIds = [...socialChannelList, ...directChannelList].map((c) => c.id);

const ConversationList = (props) => {
  const pubnub = usePubNub(); //usePubNub is only used here to get current user info (as it's randomly selected)
  // @ts-ignore
  // const [showChannels, setShowChannels] = useState(true);
  // @ts-ignore
  // const [presenceData] = usePresence({ channels: allChannelIds }); // usePresnce is one of the custom hooks provided by Chat Components
  const [currentChannel, setCurrentChannel] = useState({});

  // const presentUUIDs = presenceData[currentChannel.id]?.occupants?.map((o) => o.uuid);
  const currentUser = users.find((u) => u.id === pubnub.getUUID());

  /** Prepare welcome messages for each channel injecting current user info into some of them */
  useEffect(() => {
    // @ts-ignore
    const messages = {};
    [...rawMessages].forEach((message) => {
      if (!messages.hasOwnProperty(message.channel)) messages[message.channel] = [];
      if (message.uuid === "current_user" && currentUser?.id) message.uuid = currentUser?.id;
      messages[message.channel].push(message);
    });
  }, [currentUser]);

  return (
    <View>
      {/* {socialChannels.map(socialChannel => (
        <Text key={socialChannel.id}>{socialChannel.name}</Text>
      ))}
      {directChannelList.map(directChannel => (
        <Text key={directChannel.id}>{directChannel.name}</Text>
      ))} */}
      {/* <Chat users={users} currentChannel={currentChannel.id} channels={allChannelIds}>
        <View>
          <View className="user">
            {currentUser?.profileUrl && <img src={currentUser?.profileUrl} alt="User avatar " />}
            <Text>
              {currentUser?.name}{" "}
              <span className="close" onClick={() => setShowChannels(false)}>
                ✕
              </span>
            </Text>
          </View> 
          <Text>Channels</Text>
          <View>
            <ChannelList
              channels={socialChannelList}
              onChannelSwitched={(channel) => setCurrentChannel(channel)}
            />
          </View>
          <Text>Direct Chats</Text>
          <View>
            <ChannelList
              channels={directChannelList}
              onChannelSwitched={(channel) => setCurrentChannel(channel)}
            />
          </View>
        </View>
      </Chat> */}
      <View style={styles.Container}>
        <View style={styles.TopProfileContainer}>
          <View style={styles.ProfileContainer}>
            <View style={styles.ProfileBox}>
              <Image style={styles.ProfileBox} source={{uri: currentUser.profileUrl}}></Image>
            </View>
            <View style={styles.Profile} >
              <Text style={styles.ProfileText}>{currentUser.name}</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={styles.GroupHeading}>Channels</Text>
            <Pressable>
            <Text style={styles.GroupHeading}>Add</Text>
            </Pressable>
          </View>
          {socialChannelList.map((socialChannel) => (
            <View key={socialChannel.id} style={styles.ListItem}>
              <View style={styles.ProfileContainer}>
                <View style={styles.ProfileBox}>
                  <Image style={styles.ProfileBox} source={{uri: socialChannel.custom.thumb}}></Image>
                </View>
                <View style={styles.Profile} >
                  <Text style={styles.ProfileText}>{socialChannel.name}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View>
          <Text style={styles.GroupHeading}>Direct Chats</Text>
          {directChannelList.map((directChannel) => (
            <TouchableOpacity onPress={() => props.navigation.navigate('Chat', { userId: currentUser.id, title: directChannel.name, id: directChannel.id})}>
              <View key={directChannel.id} style={styles.ListItem}>
                <View style={styles.ProfileContainer}>
                  <View style={styles.ProfileBox}>
                    <Image style={styles.ProfileBox} source={{uri: directChannel.custom.thumb}}></Image>
                  </View>
                  <View style={styles.Profile} >
                    <Text style={styles.ProfileText}>{directChannel.name}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            
          ))}
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor:'white',
    height:'100%',
    padding: 10
  },
  TopProfileContainer: {
    height: 80,
    // backgroundColor: "#f0f3f7",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    padding: 8
  },
  ProfileBox:{
    height:42,
    width:42,
    borderRadius:50,
    backgroundColor:'#292B2F'
  },
  ProfileContainer:{
   display:'flex',
   flexDirection:'row'
  },
  ListItem: {
    backgroundColor: "#f0f3f7",
    padding: 8,
    marginBottom: 5
  },
  Profile:{
    marginLeft: 15,
  },
  ProfileText:{
    color:'#292B2F',
    fontWeight:'bold',
    fontSize:16,
    marginTop: 8,
  },
  GroupHeading:{
    color:'#292B2F',
    fontWeight:'bold',
    fontSize: 18,
    marginBottom: 10
  },
});
export default ConversationList