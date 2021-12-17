import { 
  ServerTitle, 
  ServerSidebar, 
  ServerChannelList, 
  UserPanel, 
  Avatar, 
  ServerChannel, 
  Username,
  UserPanelIcons,
  UsernameUserIconsWrapper,
  ServerCategory
} from '../../../styles/appStyles/ServerContainer/ServerSidebarStyles';
import Image from '../../../utility/imagesObj';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleUserStatusPanel } from '../../../redux/features/userStatusPanelSlice';
import { toggleUserSettingsPanel } from '../../../redux/features/userSettingsPanelSlice';
import { RootState } from '../../../redux/store';

export default function ServerSidebarComponent() {
  const userStatusPanel = useSelector(
    (state: RootState) => state.userStatusPanel.value);
  const dispatch = useDispatch();
  const [userPanelIcons, setUserPanelIcons] = React.useState({
    mute: Image.unmuteIcon,
    deafen: Image.undeafenIcon,
  });
  const setUserStatusPanel = () => {
  !userStatusPanel ? 
  dispatch(toggleUserStatusPanel(true)) : 
  dispatch(toggleUserStatusPanel(false));
  }
  const displayUserSettingsPanel = () => dispatch(toggleUserSettingsPanel(true));
  const onBlur = () => dispatch(toggleUserStatusPanel(false));

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

  return(
  <ServerSidebar>
    <ServerTitle>
    <h5>Test Server</h5>

    </ServerTitle>

    <ServerChannelList>
    <ServerCategory>
      <h2>text channels</h2>
    </ServerCategory>
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
          <img onClick={displayUserSettingsPanel} src={Image.userSettingsIcon} alt="" />
        </UserPanelIcons>
      </UsernameUserIconsWrapper>
    </UserPanel>
  </ServerSidebar>
  )
}