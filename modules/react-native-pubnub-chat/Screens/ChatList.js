import React, { useState, useEffect } from 'react'
import { Button, TextInput, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import { fetchChannels } from '../utils';
import options from '../options';
import PubNub from 'pubnub'


const pubnub = new PubNub({
  subscribeKey: options.PUBNUB_SUB,
  publishKey: options.PUBNUB_PUB,
  uuid: 'ChangeMe',
})

const ChatList = ({ navigation }) => {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null)
  const [channels, setChannels] = useState([])
  const [members, setMembers] = useState([
    { label: 'Amir', value: '03436599622' },
    { label: 'Abdul Gafoor', value: '03069790566' },
    { label: 'Imtiaz', value: '03146862263' }
  ]);

  const createGroup = () => {
    navigation.navigate("CreateGroup")
  }

  const onSelectMember = async (item) => {
    await AsyncStorage.setItem('user', JSON.stringify(item))
    fetchChannels(pubnub, item.value).then(res => {
      setChannels(res)
    })
  }
  
  return (
    <>
      {/* 
      <Button title="Group 1" onPress={() => submit({ groupName: "T5", members: ["11", "22", "33"]})}></Button>
      <Button title="Group 2" onPress={() => {
        navigation.navigate("Chat", {channelInfo: { groupName: "T2", members: ["03436599655", "03436599622", "03436599666"]}})
      }}></Button>
      <Button title="Group 3" onPress={() => {
        navigation.navigate("Chat", {channelInfo: { groupName: "T3", members: ["03436599677", "03436599622"]}})
      }}></Button> */}
      {/* <TextInput value={user} onChangeText={setUser} ></TextInput> */}
      {
        user ? <>
          <Button title="Create Group" onPress={createGroup}></Button>
          {
            Object.values(channels).map((channel, index) => (
              <Button key={index} title={channel.id} onPress={() => navigation.navigate("Chat", { channelInfo: { user: user, groupName: channel.id } })}></Button>
            ))
          }
        </> : <>
          <DropDownPicker
            zIndex={6000}
            open={open}
            value={user}
            items={members}
            setOpen={setOpen}
            setValue={setUser}
            setItems={setMembers}
            onSelectItem={onSelectMember}
          />
        </>
      }
    </>
  )
}
export default ChatList