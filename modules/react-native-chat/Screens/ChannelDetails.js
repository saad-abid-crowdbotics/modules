<<<<<<< HEAD
import React, { useLayoutEffect, useState, useCallback } from 'react';
import { ActivityIndicator, SectionList, Button, View, Text, Pressable } from 'react-native';
// @ts-ignore
import { usePubNub } from "pubnub-react";
import { ChannelType, useStore } from "../Store/store";
import { fetchChannels } from '../utils';
import Circle from '../Components/Circle';
import { StyleSheet } from 'react-native';
// @ts-ignore
import { useFocusEffect } from '@react-navigation/native';

export default ({ route, navigation }) => {
  const item = route.params.item;
  if (item.custom.type === ChannelType.Group)
    return <GroupChatDetails route={route} navigation={navigation} />;
  if (item.custom.type === ChannelType.Direct)
    return <DirectChatDetails route={route} navigation={navigation} />;
};
=======
import React, { useLayoutEffect, useState, useCallback } from "react";
import {
  SectionList,
  Button,
  View,
  Text,
  Pressable,
  StyleSheet
} from "react-native";
import { usePubNub } from "pubnub-react";
import { fetchChannels, leavePubnubChannel, removeChannelMembers, removePubnubChannel } from "../utils";
import Circle from "../Components/Circle";
import { useFocusEffect } from "@react-navigation/native";
import { ChannelType, useStore } from "../Store";

export default function ChannelDetails({ route, navigation }) {
  const item = route.params.item;
  if (item.custom.type === ChannelType.Group) {
    return <GroupChatDetails route={route} navigation={navigation} />;
  }
  if (item.custom.type === ChannelType.Direct) {
    return <DirectChatDetails route={route} navigation={navigation} />;
  }
}
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527

const DirectChatDetails = ({ route, navigation }) => {
  const pubnub = usePubNub();
  const { state, dispatch } = useStore();
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  
  const deleteChannel = () => {
    setLoading(true);
    Promise.all([
      pubnub.objects.removeChannelMetadata({ channel: route.params.item.id }),
      pubnub.channelGroups.removeChannels({
        channelGroup: state.user._id,
        channels: [route.params.item.id]
      })
    ]).then(() => {
      fetchChannels(pubnub, state.user._id).then((channels) => {
        dispatch({ channels });
        setLoading(false);
        navigation.navigate('Channels')
      })
    })
  };
  return <View>
    <View style={styles.Container}>
      <Button disabled={loading} color={"#dc3545"} title="Block user" onPress={deleteChannel} />
    </View>
  </View>;
=======

  const deleteChannel = () => {
    setLoading(true);
    removePubnubChannel(pubnub, state.user._id, route.params.item.id).then(() => {
      fetchChannels(pubnub, state.user._id).then((channels) => {
        dispatch({ channels });
        setLoading(false);
        navigation.navigate("Channels");
      });
    });
  };

  return (
    <View>
      <View style={styles.Container}>
        <Button
          disabled={loading}
          color={"#dc3545"}
          title="Block user"
          onPress={deleteChannel}
        />
      </View>
    </View>
  );
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
};

const GroupChatDetails = ({ route, navigation }) => {
  const pubnub = usePubNub();
  const { state, dispatch } = useStore();
  const channel = state.channels[route.params.item.id];
  const params = route.params.item;

  const members = state.members[channel?.id] ?? [];
  const [loading, setLoading] = useState(true);

  const bootstrap = async () => {
    const res = await pubnub.objects.getChannelMembers({ channel: params.id });
<<<<<<< HEAD
    const _members = res.data.map(member => state.contacts.find(contact => contact._id === member.uuid.id));
=======
    const _members = res.data.map((member) =>
      state.contacts.find((contact) => contact._id === member.uuid.id)
    );
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
    dispatch({ members: { ...state.members, [params.id]: _members } });
    setLoading(false);
  };

<<<<<<< HEAD
  useFocusEffect(useCallback(() => {
    bootstrap()
  },[state.channels]))

  const removeMember = async (member) => {
    setLoading(true);
    const res = await pubnub.objects.removeChannelMembers({ channel: params.id, uuids: [member._id] });
    const _members = state.members[params.id].filter(m => m._id !== member._id);
=======
  useFocusEffect(
    useCallback(() => {
      bootstrap();
    }, [state.channels])
  );

  const removeMember = async (member) => {
    setLoading(true);
    await removeChannelMembers(pubnub, params.id, member._id);
    const _members = state.members[params.id].filter(
      (m) => m._id !== member._id
    );
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
    dispatch({ members: { ...state.members, [params.id]: _members } });
    setLoading(false);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: channel?.name
    });
  }, [navigation, channel]);

  const leaveChannel = () => {
    setLoading(true);
<<<<<<< HEAD
    Promise.all([
      pubnub.objects.removeChannelMembers({
        channel: params.id,
        uuids: [state.user._id]
      }),
      pubnub.channelGroups.removeChannels({
        channelGroup: state.user._id,
        channels: [params.id]
      }),
      pubnub.objects.removeChannelMetadata({
        channel: params.id
      })
    ]).then(() => {
      fetchChannels(pubnub, state.user._id).then((channels) => {
        dispatch({ channels });
        setLoading(false);
        navigation.navigate('Channels')
      })
    })
  };

  const addMembers = () => {
    navigation.navigate('AddMember', { item: params });
=======
    leavePubnubChannel(pubnub, state.user._id, params.id).then(() => {
      fetchChannels(pubnub, state.user._id).then((channels) => {
        dispatch({ channels });
        setLoading(false);
        navigation.navigate("Channels");
      });
    });
  };

  const addMembers = () => {
    navigation.navigate("AddMember", { item: params });
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
  };

  const ListItem = (item) => {
    return (
      <View key={item.id} style={styles.ListItem}>
        <View style={styles.ProfileContainer}>
          <View style={styles.ProfileBox}>
<<<<<<< HEAD
            <Circle letter={(item.name ? item.name[0] : '').toUpperCase()} source={""} />
          </View>
          <View style={styles.Profile} >
            <Text style={{...styles.ProfileText, marginTop: 8}}>{item.name}</Text>
            {(state.user._id == params.custom.owner) &&
            <Pressable onPress={() => removeMember(item)}>
              <Text style={{color: "#dc3545", marginTop: 10}}>Remove</Text>  
            </Pressable>}
          </View>
        </View>
      </View>
    )
  }
  
  return <View style={styles.Container}>
    <SectionList
      refreshing={loading}
      onRefresh={async () => {
        await bootstrap()
      }}
      sections={[{ title: "Members", data: members}]}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => ListItem(item)}
      renderSectionHeader={({ section: { title } }) => (
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.GroupHeading}>{title}</Text>
          <Pressable onPress={addMembers}>
            <Text style={styles.GroupHeading}>Add member</Text>
          </Pressable>
        </View>
      )}
    />
    <View>
      <Button disabled={loading} color={"#dc3545"} title={"Leave group"} onPress={leaveChannel}></Button>
    </View>
  </View>;
=======
            <Circle
              letter={(item.name ? item.name[0] : "").toUpperCase()}
              source={""}
            />
          </View>
          <View style={styles.Profile}>
            <Text style={[styles.ProfileText, styles.Mt8]}>{item.name}</Text>
            {state.user._id === params.custom.owner && (
              <Pressable onPress={() => removeMember(item)}>
                <Text style={styles.RemoveText}>Remove</Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.Container}>
      <SectionList
        refreshing={loading}
        onRefresh={async () => {
          await bootstrap();
        }}
        sections={[{ title: "Members", data: members }]}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => ListItem(item)}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.TitleContainer}>
            <Text style={styles.GroupHeading}>{title}</Text>
            <Pressable onPress={addMembers}>
              <Text style={styles.GroupHeading}>Add member</Text>
            </Pressable>
          </View>
        )}
      />
      <View>
        <Button
          disabled={loading}
          color={"#dc3545"}
          title={"Leave group"}
          onPress={leaveChannel}
        ></Button>
      </View>
    </View>
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
    padding: 10,
    paddingTop: 20
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
    flexDirection: "row",
    justifyContent: "space-between",
    width: "82%"
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
  }
});
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
  Mt8: {
    marginTop: 8
  },
  RemoveText: {
    color: "#dc3545",
    marginTop: 10
  },
  TitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
