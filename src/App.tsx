import React from 'react';
import styled from 'styled-components';
import Sidebar from './styles/Sidebar';
import { ServerTitle, ServerSidebar, ServerChannelList, UserPanel, Avatar } from './styles/Server-Sidebar';
import { ServerContainer, ServerNavBar, ServerChat, ServerUserList, ServerChatRoomContainer } from './styles/ServerRoom';
import { LayerContainer, UserStatusContainer, UserStatusPanel, StatusItem } from './styles/LayerContainer';
import svg1 from './images/channelHashIcon.svg'
import svg2 from './images/svgexport-74.svg'
function App() {
  const [userStatusPanelOpactiy, setUserPanelOpacity] = React.useState(1 as number);
  return (
    <Container>
      <Sidebar>

      </Sidebar>
      <ServerSidebar>
        <ServerTitle>
          <h5>Test Server</h5>
  
        </ServerTitle>
        <ServerChannelList>

        </ServerChannelList>
        <UserPanel>
          <Avatar src="" />
        </UserPanel>
      </ServerSidebar>
      <ServerContainer>
        <ServerNavBar>
          <img src={ svg1 } alt="" />
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
                <img src={svg2} alt="" />
                <p>Online</p>
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
