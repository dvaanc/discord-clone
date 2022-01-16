import React, { useState, useEffect } from 'react';
import ServerChatContainerComponent from './ServerChatContainerComponent';
import ServerSidebarComponent from './ServerSidebarComponent';
import ServerContainer from '../../../styles/appStyles/ServerContainer/ServerContainerStyles';
import MemberListSidebarComponent from './MemberListSidebarComponent';
export default function ServerContainerComponent() {
  const [serverCollection, setServerCollection] = useState([] as any);
  const [selectedServer, setSelectedServer] = useState('' as any);

  const assignServer = (serverID: string) => {
    const index = serverCollection.findIndex((server: any) => server.serverID === serverID)
    setSelectedServer(serverCollection[index])
  }
  return (
    <ServerContainer>
      <ServerSidebarComponent />
      <ServerChatContainerComponent />
      <MemberListSidebarComponent />
    </ServerContainer>

  )
}