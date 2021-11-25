import { 
  ServerContainer, 
  ServerNavBar, 
  ServerChat, 
  ServerUserList, 
  ServerChatRoomContainer, 
  ServerNavFlexStartContainer, 
  ServerNavFlexEndContainer, 
  SearchInput 
} from '../styles/ServerContainerStyles';
import Image from '../imagesObj';
import React from 'react';

function ServerContainerComponent() {
  return (
    <ServerContainer>
    <ServerNavBar>
      <ServerNavFlexStartContainer>
        <span>
          <img src={Image.channelHashIcon} alt="" />
        </span>
        <h4>general</h4>
      </ServerNavFlexStartContainer>
      <ServerNavFlexEndContainer>
        <img src={Image.threadIcon} alt="" />
        <img src={Image.bellIcon} alt="" />
        <img src={Image.pinIcon} alt="" />
        <img src={Image.memberListIcon} alt="" />
        <SearchInput>
          <input type="text" placeholder="Search" />
          <img src={Image.magnifyingGlassIcon} alt="" />
        </SearchInput>
        <img src={Image.inboxIcon} alt="" />
        <img src={Image.helpIcon} alt="" />
      </ServerNavFlexEndContainer>
    </ServerNavBar>
    <ServerChatRoomContainer>
      <ServerChat>

      </ServerChat>
      <ServerUserList>

      </ServerUserList>
    </ServerChatRoomContainer>
    </ServerContainer>
  )
}

export default ServerContainerComponent