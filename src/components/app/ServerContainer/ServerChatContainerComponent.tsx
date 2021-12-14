import React from 'react'
import Image from '../../../utility/imagesObj'
import { 
  ServerChatContainer, 
  ServerChat, 
  ServerChatRoomContainer, 
  ServerInputWrapper, 
  MessageStatus,
  ServerInput, 
  ServerInputIcons, 
  ServerInputContainer,
  UploadIconWrapper,
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
          <UploadIconWrapper>
            <img src={Image.uploadIcon} alt=""/>
          </UploadIconWrapper>

          <ServerInput placeholder="Message #general" />
          <ServerInputIcons>
            <img src={Image.giftIcon} alt="" />
            <img src={Image.gifIcon} alt="" />
            <img src={Image.smilePaperIcon} alt="" />
          </ServerInputIcons>
        </ServerInputWrapper>
        <MessageStatus>
        test
        </MessageStatus> 
      </ServerInputContainer>

    </ServerChatContainer>
  )
}
