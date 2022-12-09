<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
import { useStore } from '../Store/store';
import { Text, TouchableOpacity, View, Image, Pressable, SectionList } from 'react-native';
// @ts-ignore
import { usePubNub } from 'pubnub-react';
import { fetchChannels, getByValue, timeSince } from "../utils";
import { StyleSheet } from 'react-native';
import Circle from '../Components/Circle';
import SearchBar from '../Components/SearchBar';
// @ts-ignore
import { useFocusEffect } from '@react-navigation/native';

const Conversions = ({ navigation }) => {
  const pubnub = usePubNub();
  const { state, dispatch } = useStore();
  const [loading, setLoading] = useState(true);
  const [conversationList, setConversationList] = useState([])
  const [search, setSearch] = useState('')
=======
import React, { useEffect, useState, useCallback } from "react";
import { useStore } from "../Store";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  SectionList,
  StyleSheet
} from "react-native";
// @ts-ignore
import { usePubNub } from "pubnub-react";
import { fetchChannels, getByValue, makeChannelsList, timeSince } from "../utils";
import Circle from "../Components/Circle";
import SearchBar from "../Components/SearchBar";
// @ts-ignore
import { useFocusEffect } from "@react-navigation/native";

const Conversations = ({ navigation }) => {
  const pubnub = usePubNub();
  const { state, dispatch } = useStore();
  const [loading, setLoading] = useState(true);
  const [conversationList, setConversationList] = useState([]);
  const [search, setSearch] = useState("");
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527

  const bootstrap = () => {
    setLoading(true);
    fetchChannels(pubnub, state.user._id).then((channels) => {
      dispatch({ channels });
      setLoading(false);
<<<<<<< HEAD
    })
  };

  useEffect(() => {
    if (!dispatch)
      return
    bootstrap();
  }, [])

  const makeList = (list) => {
    const channels = Object.entries(list).map(([id, rest]) => ({ id, ...rest }));
    const DATA = [{
      title: "Channels",
      data: channels.filter((item) => { return item.custom.type == "1" }).map((obj) => ({ ...obj }))
    }, {
      title: "Direct Chats",
      data: channels.filter((item) => { return item.custom.type == "0" }).map((obj) => ({ ...obj }))
    }];
    setConversationList(DATA)
  }

  useEffect(() => {
    makeList(state.channels)
  }, [state.channels])

  useEffect(() => {
    if (search != "") {
      const channels = Object.entries(state.channels).map(([id, rest]) => ({ id, ...rest }));
      const filterChannels = channels.filter(channel => channel.name.toLowerCase().includes(search.toLowerCase()))
      makeList(filterChannels)
    } else {
      makeList(state.channels)
    }
  }, [search])

  useFocusEffect(useCallback(() => {
    getLastSeen()
  },[state.channels]))

  const getLastSeen = () => {
    if(Object.keys(state.channels).length > 0) {
      let channels = Object.entries(state.channels).map(([id, rest]) => ({ id, ...rest }));
      Object.keys(state.channels).forEach(channel => {
        pubnub.hereNow({
          channels: [channel],
          includeUUIDs: true,
          includeState: true,
        }, (status, response) => {
          let tmp = getByValue(channels, channel)
          if(tmp) {
            tmp.last_seen = response.channels[channel]?.occupants[0]?.state?.last_seen
            const DATA = [{
              title: "Channels",
              data: channels.filter((item) => { return item.custom.type == "1" }).map((obj) => ({ ...obj }))
            }, {
              title: "Direct Chats",
              data: channels.filter((item) => { return item.custom.type == "0" }).map((obj) => ({ ...obj }))
            }];
            setConversationList(DATA)
          }
        });
      })
    }
  }

  const ListItem = (item) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Channel', { item: item })}>
        <View key={item.id} style={styles.ListItem}>
          <View style={styles.ProfileContainer}>
            <View style={styles.ProfileBox}>
              <Circle letter={(item.name ? item.name[0] : '').toUpperCase()} source={item.custom.caption} />
            </View>
            <View style={styles.Profile} >
              <Text style={{...styles.ProfileText, marginTop: ('last_seen' in item && item.last_seen) ? 1 : 8}}>{item.name}</Text>
              { ('last_seen' in item && item.last_seen) && <Text style={{fontSize: 12, color: "gray"}}>Last seen: {timeSince(new Date(item?.last_seen).getTime())}</Text>}
=======
    });
  };

  useEffect(() => {
    if (!dispatch) {
      return;
    }
    bootstrap();
  }, []);

  useEffect(() => {
    const DATA = makeChannelsList(state.channels);
    setConversationList(DATA);
  }, [state.channels]);

  useEffect(() => {
    if (search !== "") {
      const channels = Object.entries(state.channels).map(([id, rest]) => ({
        id,
        ...rest
      }));
      const filterChannels = channels.filter((channel) =>
        channel.name.toLowerCase().includes(search.toLowerCase())
      );
      const DATA = makeChannelsList(filterChannels);
      setConversationList(DATA);
    } else {
      const DATA = makeChannelsList(state.channels);
      setConversationList(DATA);
    }
  }, [search]);

  useFocusEffect(
    useCallback(() => {
      getLastSeen();
    }, [state.channels])
  );

  const getLastSeen = () => {
    if (Object.keys(state.channels).length > 0) {
      const channels = Object.entries(state.channels).map(([id, rest]) => ({
        id,
        ...rest
      }));
      Object.keys(state.channels).forEach((channel) => {
        pubnub.hereNow(
          {
            channels: [channel],
            includeUUIDs: true,
            includeState: true
          },
          (status, response) => {
            const tmp = getByValue(channels, channel);
            if (tmp) {
              tmp.last_seen =
                response.channels[channel]?.occupants[0]?.state?.last_seen;
              const DATA = [
                {
                  title: "Channels",
                  data: channels
                    .filter((item) => {
                      return item.custom.type === 1;
                    })
                    .map((obj) => ({ ...obj }))
                },
                {
                  title: "Direct Chats",
                  data: channels
                    .filter((item) => {
                      return item.custom.type === 0;
                    })
                    .map((obj) => ({ ...obj }))
                }
              ];
              setConversationList(DATA);
            }
          }
        );
      });
    }
  };

  const ListItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Channel", { item: item })}
      >
        <View key={item.id} style={styles.ListItem}>
          <View style={styles.ProfileContainer}>
            <View style={styles.ProfileBox}>
              <Circle
                letter={(item.name ? item.name[0] : "").toUpperCase()}
                source={item.custom.caption}
              />
            </View>
            <View style={styles.Profile}>
              <Text
                style={{
                  ...styles.ProfileText,
                  marginTop: "last_seen" in item && item.last_seen ? 1 : 8
                }}
              >
                {item.name}
              </Text>
              {"last_seen" in item && item.last_seen && (
                <Text style={styles.LastSeenText}>
                  Last seen: {timeSince(new Date(item?.last_seen).getTime())}
                </Text>
              )}
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
            </View>
          </View>
        </View>
      </TouchableOpacity>
<<<<<<< HEAD
    )
  }
=======
    );
  };
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527

  return (
    <View style={styles.Container}>
      <View style={styles.TopProfileContainer}>
        <View style={styles.ProfileContainer}>
          <View style={styles.ProfileBox}>
<<<<<<< HEAD
            <Image style={styles.ProfileBox} source={{ uri: state.user.avatar }}></Image>
          </View>
          <View style={styles.Profile} >
            <Text style={{...styles.ProfileText, marginTop: 8}}>{state.user.name}</Text>
=======
            <Image
              style={styles.ProfileBox}
              source={{ uri: state.user.avatar }}
            ></Image>
          </View>
          <View style={styles.Profile}>
            <Text style={[styles.ProfileText, styles.MT8]}>
              {state.user.name}
            </Text>
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
          </View>
        </View>
      </View>
      <SearchBar value={search} onChange={setSearch} />
      <SectionList
        refreshing={loading}
        onRefresh={async () => {
<<<<<<< HEAD
          await bootstrap()
=======
          await bootstrap();
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
        }}
        sections={conversationList}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => ListItem(item)}
        renderSectionHeader={({ section: { title } }) => (
<<<<<<< HEAD
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.GroupHeading}>{title}</Text>
            {title == "Channels" ?
              <Pressable onPress={() => navigation.navigate('CreateChannel')}>
                <Text style={styles.GroupHeading}>Create group</Text>
              </Pressable>
              : 
              <Pressable onPress={() => navigation.navigate('CreateDirectChannel')}>
                <Text style={styles.GroupHeading}>New chat</Text>
              </Pressable>
            }
=======
          <View style={styles.ListContainer}>
            <Text style={styles.GroupHeading}>{title}</Text>
            {title === "Channels"
              ? (
              <Pressable onPress={() => navigation.navigate("CreateChannel")}>
                <Text style={styles.GroupHeading}>Create group</Text>
              </Pressable>
                )
              : (
              <Pressable
                onPress={() => navigation.navigate("CreateDirectChannel")}
              >
                <Text style={styles.GroupHeading}>New chat</Text>
              </Pressable>
                )}
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
          </View>
        )}
      />
    </View>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
};

const styles = StyleSheet.create({
  Container: {
<<<<<<< HEAD
    backgroundColor: 'white',
    height: '100%',
=======
    backgroundColor: "white",
    height: "100%",
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
    padding: 10
  },
  TopProfileContainer: {
    height: 80,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    padding: 8
  },
  ProfileBox: {
    height: 42,
    width: 42,
    borderRadius: 50,
<<<<<<< HEAD
    backgroundColor: '#292B2F'
  },
  ProfileContainer: {
    display: 'flex',
    flexDirection: 'row'
=======
    backgroundColor: "#292B2F"
  },
  ProfileContainer: {
    display: "flex",
    flexDirection: "row"
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
  },
  ListItem: {
    backgroundColor: "#f0f3f7",
    padding: 8,
    marginBottom: 5
  },
  Profile: {
    marginLeft: 15,
    display: "flex",
    flexDirection: "column"
  },
  ProfileText: {
<<<<<<< HEAD
    color: '#292B2F',
    fontWeight: 'bold',
    fontSize: 16
  },
  GroupHeading: {
    color: '#292B2F',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  },
});
export default Conversions
=======
    color: "#292B2F",
    fontWeight: "bold",
    fontSize: 16
  },
  GroupHeading: {
    color: "#292B2F",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10
  },
  LastSeenText: {
    fontSize: 12,
    color: "gray"
  },
  MT8: {
    marginTop: 8
  },
  ListContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
export default Conversations;
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
