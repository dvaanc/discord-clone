import React from 'react'
import { 
  ServerChatContainer, 
  ServerChat, 
  ServerChatRoomContainer, 
  ServerInputWrapper, 
  MessageStatus,
  ServerInput, 
  ServerInputIcons, 
  ServerInputContainer
} from '../../../styles/appStyles/ServerContainer/ServerChatContainerStyles'
import ServerNavBarComponent from './ServerNavBarComponent'
export default function ServerChatContainerComponent() {
  return (
    <ServerChatContainer>
      <ServerNavBarComponent />
      <ServerChatRoomContainer>
      </ServerChatRoomContainer>
      <ServerInputContainer>
        <ServerInputWrapper>
          <ServerInput placeholder="Message #general" />
          <ServerInputIcons>

          </ServerInputIcons>
        </ServerInputWrapper>
        <MessageStatus>
        test
        </MessageStatus> 
      </ServerInputContainer>

    </ServerChatContainer>
  )
}
