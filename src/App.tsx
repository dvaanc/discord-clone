import React from 'react';
import styled from 'styled-components';
import Sidebar from './styles/Sidebar';
import { ServerTitle, ServerSidebar } from './styles/Server-Sidebar';
import { ServerRoomContainer, ServerNavBar } from './styles/ServerRoom'
function App() {
  return (
    <Container>
      <Sidebar>

      </Sidebar>
      <ServerSidebar>
        <ServerTitle>
          <h5>Test Server</h5>
          <img src="images/chevron-bottom.png" alt="" />
        </ServerTitle>
      </ServerSidebar>
      <ServerRoomContainer>
        <ServerNavBar>
          
        </ServerNavBar>
      </ServerRoomContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 100%;
  background-color: #36393F;
`
export default App;
