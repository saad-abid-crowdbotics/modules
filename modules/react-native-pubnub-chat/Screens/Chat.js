import React from "react";

import ChatView from "../ChatView";

const Chat = (props) => {
  const channelInfo = props.route.params.channelInfo;
  return <ChatView channelName={channelInfo.groupName} userUniqueId={channelInfo.user} />;
};
export default Chat;
