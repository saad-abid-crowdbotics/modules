<<<<<<< HEAD
import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker'
import CirclePrompt from '../Components/CirclePrompt';
import { upload } from '../Store/storage';
import { useStore } from '../Store/store';
// @ts-ignore
import { usePubNub } from 'pubnub-react';
import options from '../options';
import { StyleSheet } from 'react-native';
import Loader from '../Components/loader';

export default ({ navigation, route }) => {
=======
import React, { useState, Fragment } from "react";
import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import CirclePrompt from "../Components/CirclePrompt";
import { useStore } from "../Store";
import { usePubNub } from "pubnub-react";
import options from "../options";
import Loader from "../Components/loader";
import { upload } from "../Api";
import { setChannelMetadata } from "../utils";

const EditChannelDetails = ({ navigation, route }) => {
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
  const { state, dispatch } = useStore();
  const pubnub = usePubNub();
  const [name, setName] = useState(route.params.item.name);
  const [image, setImage] = useState(null);
  const [localImage, setLocalImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
<<<<<<< HEAD
    const res = await pubnub.objects.setChannelMetadata({
      channel: route.params.item.id,
      data: { name }
    });
=======
    await setChannelMetadata(pubnub, route.params.item.id, { name });
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
    const channel = state.channels[route.params.item.id];
    if (image) {
      try {
        const file = await upload(image);
<<<<<<< HEAD
        const res2 = await pubnub.objects.setChannelMetadata({
          channel: route.params.item.id,
          data: { custom: { ...channel.custom, caption: file.url } }
        });
        dispatch({
          channels: {
            ...state.channels,
            [route.params.item.id]: { ...channel, name, custom: { ...channel.custom, caption: file.url } }
=======
        await setChannelMetadata(pubnub, route.params.item.id, { custom: { ...channel.custom, caption: file.url } });
        dispatch({
          channels: {
            ...state.channels,
            [route.params.item.id]: {
              ...channel,
              name,
              custom: { ...channel.custom, caption: file.url }
            }
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
          }
        });
        setLoading(false);
        navigation.goBack();
<<<<<<< HEAD
      }
      catch (e) {
        console.log('failed to upload a file', e);
        setLoading(false);
      }
=======
      } catch (e) {
        console.log("failed to upload a file", e);
        setLoading(false);
      }
    } else {
      dispatch({
        channels: {
          ...state.channels,
          [route.params.item.id]: {
            ...channel,
            name
          }
        }
      });
      setLoading(false);
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.openPicker({
<<<<<<< HEAD
      mediaType: 'photo',
      includeBase64: true,
    });
    if (!result) {
      return console.log('picking result cancelled')
=======
      mediaType: "photo",
      includeBase64: true
    });
    if (!result) {
      return console.log("picking result cancelled");
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
    }
    setImage(result.data);
    setLocalImage(result.path);
  };

  return (
<<<<<<< HEAD
    <>
      {loading && <Loader />}
      <View style={styles.Container}>
        <CirclePrompt onPress={pickImage} source={localImage || route.params.item.custom.caption} />
        <View style={{ ...options.section, marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Channel name</Text>
          <TextInput placeholder="Name" value={name} onChangeText={setName} style={{ ...options.ListViewStyle.subtitle, borderBottomWidth: 1 }} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button title="Update" onPress={submit} />
        </View>
      </View>
    </>
=======
    <Fragment>
      {loading && <Loader />}
      <View style={styles.Container}>
        <CirclePrompt
          onPress={pickImage}
          source={localImage || route.params.item.custom.caption}
        />
        <View style={[options.section, styles.Mt20]}>
          <Text style={styles.ChannelName}>Channel name</Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={[options.ListViewStyle.subtitle, styles.TextInput]}
          />
        </View>
        <View style={styles.Mt20}>
          <Button title="Update" onPress={submit} />
        </View>
      </View>
    </Fragment>
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
  );
};

const styles = StyleSheet.create({
  Container: {
<<<<<<< HEAD
    backgroundColor: 'white',
    height: '100%',
    padding: 10,
    paddingTop: 20
  },
})
=======
    backgroundColor: "white",
    height: "100%",
    padding: 10,
    paddingTop: 20
  },
  Mt20: {
    marginTop: 20
  },
  ChannelName: {
    fontWeight: "bold"
  },
  TextInput: {
    borderBottomWidth: 1
  }
});
export default EditChannelDetails;
>>>>>>> 9e8fd9de641fdb681217e7d84654b35371dbc527
