import React from 'react'
import { ServerChatContainer, ServerChat, ServerChatRoomContainer } from '../../../styles/appStyles/ServerContainer/ServerChatContainerStyles'
import ServerNavBarComponent from './ServerNavBarComponent'
export default function ServerChatContainerComponent() {
  return (
    <ServerChatContainer>
      <ServerNavBarComponent />
      <ServerChatRoomContainer>
        <ServerChat>
        </ServerChat>
      </ServerChatRoomContainer>
    </ServerChatContainer>
  )
}
