import React, { useState } from "react";
import {
  Button,
  FlatList, StyleSheet, Text,
  TextInput,
  View
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { cloneArray, createChannel } from "../utils";
import options from "../options";
import AsyncStorage from '@react-native-async-storage/async-storage';
import PubNub from 'pubnub'


const pubnub = new PubNub({
  subscribeKey: options.PUBNUB_SUB,
  publishKey: options.PUBNUB_PUB,
  uuid: 'ChangeMe',
})

const CreateGroup = ({ navigation }) => {
  const [contacts, setContacts] = useState(options.users);
  const [name, setName] = useState(null);

  const handleCheckBox = (newValue, item) => {
    const tmpContacts = cloneArray(contacts);
    const obj = tmpContacts.find((obj) => obj.user_id === item.user_id);
    obj.isSelected = newValue;
    setContacts(tmpContacts);
  };

  const createGroup = async () => {
    const memberList = contacts.filter(contact => contact['isSelected']).map(contact => contact.user_id)
    const tmpUser = await AsyncStorage.getItem('user')
    const user = JSON.parse(tmpUser)
    await createChannel(pubnub, user.value, [user.value, ...memberList], name, {})
  };
  
  const ListItem = (item) => {
    return (
      <View key={item.user_id} style={styles.ListItem}>
        <View style={styles.ProfileContainer}>
          <View style={styles.CheckBoxContainer}>
            <CheckBox
              tintColors={{ true: "#4CAF50", false: "lightgray" }}
              value={item.isSelected}
              onValueChange={(newValue) => handleCheckBox(newValue, item)}
            />
          </View>
          <View style={styles.Profile}>
            <Text style={styles.ProfileText}>{item.name}</Text>
            <Text style={styles.ProfileText}>{item.user_id}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.Container}>
        <View>
          <TextInput
            style={styles.TextInput}
            autoFocus={true}
            value={name}
            onChangeText={setName}
            placeholder="Group Name"
          />
        </View>
        <View>
          <Text style={styles.GroupHeading}>Select group members</Text>
        </View>
        <FlatList
          data={contacts}
          renderItem={({ item }) => ListItem(item)}
          keyExtractor={(item) => item.user_id}
        />
        <Button
          onPress={createGroup}
          title="Create Group"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    height: "100%",
    padding: 10
  },
  ProfileBox: {
    height: 42,
    width: 42,
    borderRadius: 50,
    backgroundColor: "#292B2F"
  },
  ProfileContainer: {
    display: "flex",
    flexDirection: "row"
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
  CheckBoxContainer: {
    marginBottom: 5,
    marginTop: 5,
    marginRight: 8
  },
  TextInput: {
    color: "#000"
  },
  GroupName: {
    fontSize: 12,
    color: "#dc3545"
  }
});

export default CreateGroup