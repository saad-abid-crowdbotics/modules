<<<<<<< HEAD
import React, { useState } from 'react';
import { SectionList, TouchableOpacity, View } from 'react-native';
import SearchBar from '../Components/SearchBar';
import { ChannelType, useStore } from '../Store/store';
// @ts-ignore
import { usePubNub } from 'pubnub-react';
import { StyleSheet, Text } from 'react-native';
import Circle from '../Components/Circle';
import Loader from '../Components/loader';
=======
import React, { useState } from "react";
import {
  SectionList,
  TouchableOpacity,
  View,
  StyleSheet,
  Text
} from "react-native";
import SearchBar from "../Components/SearchBar";
import { ChannelType, useStore } from "../Store";
// @ts-ignore
import { usePubNub } from "pubnub-react";
import Circle from "../Components/Circle";
import Loader from "../Components/loader";
import { createDirectChannel } from "../utils";
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527

const CreateDirectChannel = ({ navigation }) => {
  const pubnub = usePubNub();
  const { state, dispatch } = useStore();
<<<<<<< HEAD
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false)
  const data = search ? state.contacts.filter(item => item.name.includes(search)) : state.contacts;
  
  const createChat = async (item) => {
    const channel = `${state.user._id}-${item._id}`;
    const res1 = await pubnub.objects.setChannelMetadata({ channel, data: { name: state.user.name +" - "+ item.name, custom: { type: ChannelType.Direct, owner: state.user._id } }});
    const res2 = await pubnub.objects.setChannelMembers({ channel, uuids: [{ id: state.user._id }, { id: `${item._id}` }] });
    const res3 = await pubnub.channelGroups.addChannels({ channels: [channel], channelGroup: state.user._id });
    dispatch({
      channels: {
        ...state.channels,
        [channel]: {
          id: channel,
          name: state.user.name +" - "+ item.name,
=======
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const data = search
    ? state.contacts.filter((item) => item.name.includes(search))
    : state.contacts;

  const createChat = async (item) => {
    const res = await createDirectChannel(
      pubnub,
      state.user._id,
      item._id,
      { name: state.user.name + " - " + item.name, custom: { type: 0, owner: state.user._id } }
    );
    dispatch({
      channels: {
        ...state.channels,
        [res.channel]: {
          id: res.channel,
          name: state.user.name + " - " + item.name,
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
          custom: { type: ChannelType.Direct, owner: state.user._id }
        }
      }
    });
<<<<<<< HEAD
    setLoading(false)
    navigation.replace('Channel', { item: { id: channel, name: state.user.name +" - "+ item.name, custom: { type: ChannelType.Direct, owner: state.user._id } } });
=======
    setLoading(false);
    navigation.replace("Channel", {
      item: {
        id: res.channel,
        name: state.user.name + " - " + item.name,
        custom: { type: ChannelType.Direct, owner: state.user._id }
      }
    });
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
  };

  const ListItem = (item) => {
    return (
<<<<<<< HEAD
      <TouchableOpacity onPress={() => {
        setLoading(true);
        createChat(item)
      }}>
        <View key={item.id} style={styles.ListItem}>
          <View style={styles.ProfileContainer}>
            <View style={styles.ProfileBox}>
              <Circle letter={(item.name ? item.name[0] : '').toUpperCase()} source={""} />
            </View>
            <View style={styles.Profile} >
              <Text style={{ ...styles.ProfileText, marginTop: 8 }}>{item.name}</Text>
=======
      <TouchableOpacity
        onPress={() => {
          setLoading(true);
          createChat(item);
        }}
      >
        <View key={item.id} style={styles.ListItem}>
          <View style={styles.ProfileContainer}>
            <View style={styles.ProfileBox}>
              <Circle
                letter={(item.name ? item.name[0] : "").toUpperCase()}
                source={""}
              />
            </View>
            <View style={styles.Profile}>
              <Text style={[styles.ProfileText, styles.Mt8]}>{item.name}</Text>
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
    <>
      {loading && <Loader />}
      <View style={styles.Container}>
        <SearchBar value={search} onChange={setSearch} />
        <SectionList
          sections={[{ title: "Contacts", data: data }]}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => ListItem(item)}
          renderSectionHeader={({ section: { title } }) => (
<<<<<<< HEAD
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
=======
            <View style={styles.TitleContainer}>
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
              <Text style={styles.GroupHeading}>{title}</Text>
            </View>
          )}
        />
      </View>
    </>
<<<<<<< HEAD
  )
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    height: '100%',
=======
  );
};

const styles = StyleSheet.create({
  Container: {
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

export default CreateDirectChannel
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
  TitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default CreateDirectChannel;
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
