import React, { useState } from 'react'
import Image from '../../../utility/imagesObj'
import { 
  ServerChatContainer, 
  ServerChat, 
  ServerChatRoomContainer, 
  ServerInputWrapper, 
  MessageStatus,
  ServerInput, 
  ServerInputIcons, 
  ServerInputFormContainer,
  UploadIconWrapper,
} from '../../../styles/appStyles/ServerContainer/ServerChatContainerStyles'
import ServerNavBarComponent from './ServerNavBarComponent'
import newChatMessage from '../../../firebase/firebase'
export default function ServerChatContainerComponent() {
  const [chat, setChatMessage] = useState('' as string);
  const handleFormInputSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    
  }
  const handleChatInput = (e: React.ChangeEvent) => setChatMessage((e.target as HTMLInputElement).value);

  return (
    <ServerChatContainer>
      <ServerNavBarComponent />
      <ServerChatRoomContainer>
      </ServerChatRoomContainer>
      <ServerInputFormContainer onSubmit={handleFormInputSubmit}>
        <ServerInputWrapper>
          <UploadIconWrapper>
            <img src={Image.uploadIcon} alt=""/>
          </UploadIconWrapper>

          <ServerInput placeholder="Message #general" onChange={handleChatInput} value={chat} />
          <ServerInputIcons>
            <img src={Image.giftIcon} alt="" />
            <img src={Image.gifIcon} alt="" />
            <img src={Image.smilePaperIcon} alt="" />
            <img src={Image.smileIcon} alt="" />
          </ServerInputIcons>
        </ServerInputWrapper>
        <MessageStatus>
        test
        </MessageStatus> 
      </ServerInputFormContainer>

    </ServerChatContainer>
  )
}
