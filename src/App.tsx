import React from 'react';
import styled from 'styled-components';
import Sidebar from './styles/Sidebar';
import { ServerTitle, ServerSidebar, ServerChannelList, UserPanel, Avatar, ServerChannel } from './styles/Server-Sidebar';
import { ServerContainer, ServerNavBar, ServerChat, ServerUserList, ServerChatRoomContainer, ServerNavFlexStartContainer, ServerNavFlexEndContainer } from './styles/ServerRoom';
import { LayerContainer, UserStatusContainer, UserStatusPanel, StatusItem } from './styles/LayerContainer';
import svg1 from './images/channelHashIcon.svg'
import svg2 from './images/svgexport-74.svg'
import Image from './imagesObj';
function App() {
  const [userStatusPanelOpactiy, setUserPanelOpacity] = React.useState(0 as number);
  return (
    <Container>
      <Sidebar>

      </Sidebar>
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
          <Avatar src="" />
        </UserPanel>
      </ServerSidebar>
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
            <input type="text" placeholder="Search" />
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
        <LayerContainer>
          <UserStatusContainer>
            <UserStatusPanel opacity={userStatusPanelOpactiy}>
              <StatusItem>
                <span>
                <img src={Image.onlineStatusIcon} alt="" />
                </span>
                <p>Online</p>
              </StatusItem>
              <StatusItem>
                <span>
                  <img src={Image.idleStatusIcon} alt="" />
                </span>
                <p>Idle</p>
              </StatusItem>
              <StatusItem>
                <span>
                  <img src={Image.doNoDisturbStatusIcon} alt="" />
                </span>
                <div>
                  <p>Do Not Disturb</p>
                  <p>You will not receive any desktop notifications.</p>
                </div>
              </StatusItem>
              <StatusItem>
                <span>
                  <img src={Image.invisibleStatusIcon} alt="" />
                </span>
                <div>
                  <p>Invisible</p>
                  <p>You will not appear online, but you will have full access to all of Discord.</p>
                </div>
              </StatusItem>
              <StatusItem>
                <span>
                  <img src="" alt="" />
                </span>
                <h4>Edit Custom Status</h4>
                <span>
                  <img src={Image.deleteStatusIcon} alt="" />
                </span>
              </StatusItem>
            </UserStatusPanel>
          </UserStatusContainer>
        </LayerContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 100%;
  /* background-color: #36393F; */
  background-color: darkred;
`
export default App;
