import React, { useState, useEffect } from 'react';
import ServerChatContainerComponent from './ServerChatContainerComponent';
import ServerSidebarComponent from './ServerSidebarComponent';
import ServerContainer from '../../../styles/appStyles/ServerContainer/ServerContainerStyles';
import MemberListSidebarComponent from './MemberListSidebarComponent';
interface ServerContainerProps {
  servers: any | null,
}
export default function ServerContainerComponent({ servers }: ServerContainerProps) {
  const [serverCollection, setServerCollection] = useState([] as any);
  const [selectedServer, setSelectedServer] = useState('' as any);

  const assignServer = (serverID: string) => {
    const index = serverCollection.findIndex((server: any) => server.serverID === serverID)
    setSelectedServer(serverCollection[index])
  }
  /* 
  cache channels
  const arr = [
    {
      serverID: 
      textChannels: [
        {
          categoryID:
          channels: [
            {
              channelName: 
              
            }
          ]
        }
      ]
    }
  ]
  */
  return (
    <ServerContainer>
      <ServerSidebarComponent />
      <ServerChatContainerComponent />
      <MemberListSidebarComponent />
    </ServerContainer>

  )
}