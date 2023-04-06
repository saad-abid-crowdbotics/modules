export const cloneArray = (data) => {
  return JSON.parse(JSON.stringify(data));
};

export const fileExtension = (path) => {
  return path.split(".").pop();
};

export const makeId = (length = 10) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const setUUID = (pubnub, uuid) => {
  pubnub.setUUID(uuid);
};

export const setMemberships = (pubnub, channelName) => {
  pubnub.objects.setMemberships({
    channels: [channelName]
  });
};

export const subscribe = (pubnub, channelName) => {
  pubnub.subscribe({ channels: [channelName], withPresence: true });
};

export const unsubscribe = (pubnub, channelName) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const result = await pubnub.unsubscribe({ channels: [channelName] });
    resolve(result);
  });
};

export const setUUIDMetadata = (pubnub, name) => {
  return pubnub.objects.setUUIDMetadata({
    data: {
      name: name
    }
  });
};

export const getUUIDMetadata = (pubnub, identifier) => {
  return pubnub.objects.getUUIDMetadata({
    uuid: identifier
  });
};

export const publish = (pubnub, channelName, text) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const result = await pubnub.publish({ channel: channelName, message: text });
    resolve(result);
  });
};

export const fetchMessages = async (pubnub, channelName) => {
  return await pubnub.fetchMessages({ channels: [channelName], includeUUID: true, count: 8 });
};

export const hereNow = async (pubnub, channelName) => {
  return await pubnub.hereNow({ channels: [channelName], includeUUIDs: true });
};

export const convertTimetoken = timetoken => {
  const date = new Date(Math.trunc(timetoken / 10000, 16));
  const timedisplay = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return timedisplay;
};

export const createChannel = (pubnub, userID, memberList, channelName, customData) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    await pubnub.objects.setChannelMetadata({
      channel: channelName,
      data: { name: channelName, custom: { ...customData, members: memberList.join(",") } }
    });
    await pubnub.objects.setChannelMembers({
      channel: channelName,
      uuids: memberList
    });
    const result = await pubnub.channelGroups.addChannels({
      channels: [channelName],
      channelGroup: userID
    });
    resolve(result);
  });
};

export const setChannelMetaData = (pubnub, channelID, data) => {
  // eslint-disable-next-line no-async-promise-executor
  return pubnub.objects.setChannelMetadata({
    channel: channelID,
    data: data
  });
};

export const removeChannel = (pubnub, userID, channelID) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    await pubnub.objects.removeChannelMetadata({ channel: channelID });
    await pubnub.channelGroups.removeChannels({
      channelGroup: userID,
      channels: [channelID]
    });
    resolve({ message: "Channel removed successfully" });
  });
};

export const leaveChannel = (pubnub, userID, channelID) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    await pubnub.objects.removeChannelMembers({
      channel: channelID,
      uuids: [userID]
    });
    await pubnub.channelGroups.removeChannels({
      channelGroup: userID,
      channels: [channelID]
    });
    await pubnub.objects.removeChannelMetadata({
      channel: channelID
    });
    resolve({ message: "Channel leave successfully" });
  });
};

export const getChannelMembers = (pubnub, channelID) => {
  // eslint-disable-next-line no-async-promise-executor
  return pubnub.objects.getChannelMembers({
    channel: channelID
  });
};

export const setChannelMembers = (pubnub, channelID, memberID) => {
  // eslint-disable-next-line no-async-promise-executor
  return pubnub.objects.setChannelMembers({
    channel: channelID,
    uuids: [memberID]
  });
};

export const removeChannelMembers = (pubnub, channelID, memberID) => {
  // eslint-disable-next-line no-async-promise-executor
  return pubnub.objects.removeChannelMembers({
    channel: channelID,
    uuids: [memberID]
  });
};

export const fetchChannels = (pubnub, userId) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const channels = {};
    const metadata = await pubnub.objects.getAllChannelMetadata({
      include: { customFields: true }
    });
    metadata.data.forEach(({ id, name, updated, custom }) => {
      if ("members" in custom) {
        if (custom.members.includes(userId)) {
          channels[id] = {
            id,
            name,
            updated,
            custom: { ...channels[id]?.custom, ...custom }
          };
        }
      }
    });
    resolve(channels);
  });
};
