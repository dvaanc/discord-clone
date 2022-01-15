import React, { useState, useEffect } from 'react';
import ServerChatContainerComponent from './ServerChatContainerComponent';
import ServerSidebarComponent from './ServerSidebarComponent';
import ServerContainer from '../../../styles/appStyles/ServerContainer/ServerContainerStyles';
import MemberListSidebarComponent from './MemberListSidebarComponent';
export default function ServerContainerComponent() {
  const [serverChannels, setServerChannels] = useState([] as any);
  
  return (
    <ServerContainer>
      <ServerSidebarComponent />
      <ServerChatContainerComponent />
      <MemberListSidebarComponent />
    </ServerContainer>

  )
}