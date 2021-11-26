import { 
  ServerTitle, 
  ServerSidebar, 
  ServerChannelList, 
  UserPanel, 
  Avatar, 
  ServerChannel 
} from '../styles/ServerSidebarStyles';
import Image from '../imagesObj';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleUserStatusPanel } from '../features/userStatusPanelSlice';

export default function ServerSidebarComponent() {
  const [userStatusPanel, setDisplay] = React.useState(true);
  const dispatch = useDispatch();
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
      <Avatar onClick={setUserStatusPanel} onBlur={onBlur}/>
    </UserPanel>
  </ServerSidebar>
  )
}