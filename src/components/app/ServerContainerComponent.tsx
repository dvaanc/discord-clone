import { 
  ServerContainer, 
  ServerNavBar, 
  ServerChat, 
  ServerUserList, 
  ServerChatRoomContainer, 
  ServerNavFlexStartContainer, 
  ServerNavFlexEndContainer, 
  SearchInput 
} from '../../styles/appStyles/ServerContainerStyles';
import Image from '../../utility/imagesObj';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSearchPanel } from '../../redux/features/searchPanelSlice';

export default function ServerContainerComponent() {
  const dispatch = useDispatch();
  const onFocus = () => dispatch(toggleSearchPanel(true));
  const onBlur = () => dispatch(toggleSearchPanel(false));
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
          <input type="text" onFocus={onFocus} onBlur={onBlur} placeholder="Search" />
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