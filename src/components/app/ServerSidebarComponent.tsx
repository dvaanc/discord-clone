import { 
  ServerTitle, 
  ServerSidebar, 
  ServerChannelList, 
  UserPanel, 
  Avatar, 
  ServerChannel, 
  Username,
  UserPanelIcons,
  UsernameUserIconsWrapper
} from '../../styles/appStyles/ServerSidebarStyles';
import Image from '../../utility/imagesObj';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleUserStatusPanel } from '../../redux/features/userStatusPanelSlice';

export default function ServerSidebarComponent() {
  const [userStatusPanel, setDisplay] = React.useState(true);
  const dispatch = useDispatch();
  const [userPanelIcons, setUserPanelIcons] = React.useState({
    mute: Image.unmuteIcon,
    deafen: Image.undeafenIcon,
  });
  const setUserStatusPanel = (): void => {
    if(!userStatusPanel) {
      dispatch(toggleUserStatusPanel(userStatusPanel));
      setDisplay(true);
      return;
    }
    if(userStatusPanel) {
      dispatch(toggleUserStatusPanel(userStatusPanel));
      setDisplay(false);
      return;
    }
    return;
  }
  const onBlur = () => {
    dispatch(toggleUserStatusPanel(userStatusPanel));
    setDisplay(false);
    return;
  }
  const toggleMute = () => {
    userPanelIcons.mute === Image.unmuteIcon ? 
    setUserPanelIcons({...userPanelIcons, mute: Image.muteMicIcon }) :
    setUserPanelIcons({...userPanelIcons, mute: Image.unmuteIcon });
  }
  const toggleDeafen = () => {
    userPanelIcons.deafen === Image.undeafenIcon ? 
    setUserPanelIcons({...userPanelIcons, deafen: Image.deafenIcon }) :
    setUserPanelIcons({...userPanelIcons, deafen: Image.undeafenIcon });
  }
  const showUserSettingsOverlay = () => {

  }
  return(
  <ServerSidebar>
    <ServerTitle>
    <h5>Test Server</h5>

    </ServerTitle>
    <ServerChannelList>
      <ServerChannel>
      <div>
        <span>
          <img src={Image.channelHashIcon} alt="" />
        </span>
        <p>test</p>
      </div>
    </ServerChannel>
    </ServerChannelList>

    <UserPanel>
      <Avatar src={Image.defaultAvatar} onClick={setUserStatusPanel} onBlur={onBlur}/>
      <UsernameUserIconsWrapper>
        <Username>
          <h5>TestUser</h5>
          <span>
            <p>Test Status</p>
          </span>
        </Username>
        <UserPanelIcons>
          <img onClick={toggleMute} src={userPanelIcons.mute} alt="" />
          <img onClick={toggleDeafen} src={userPanelIcons.deafen} alt="" />
          <img src={Image.userSettingsIcon} alt="" />
        </UserPanelIcons>
      </UsernameUserIconsWrapper>
    </UserPanel>
  </ServerSidebar>
  )
}