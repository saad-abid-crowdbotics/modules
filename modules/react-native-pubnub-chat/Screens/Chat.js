import React from 'react'

import ChatView from '../ChatView'


const Chat = (props) => {

  const channelInfo = props.route.params.channelInfo
  return <ChatView channel_name={channelInfo.groupName} user_unique_id={channelInfo.user} />
}
export default Chat