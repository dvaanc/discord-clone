import React from 'react';
import styled from 'styled-components';
import Sidebar from './styles/Sidebar';
import { ServerTitle, ServerSidebar } from './styles/Server-Sidebar';
import { ServerContainer, ServerNavBar, ServerChat, ServerUserList, ServerChatRoomContainer } from './styles/ServerRoom'
import svg1 from './images/svgexport-29.svg'
function App() {
  return (
    <Container>
      <Sidebar>

      </Sidebar>
      <ServerSidebar>
        <ServerTitle>
          <h5>Test Server</h5>
  
        </ServerTitle>
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
