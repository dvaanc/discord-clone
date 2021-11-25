import React from 'react';
import styled from 'styled-components';
import Container from './styles/AppStyles';
import SidebarComponent from './components/SidebarComponent';
import ServerSidebarComponent from './components/ServerSidebarComponent';
import ServerContainerComponent from './components/ServerContainerComponent';
import LayerContainerComponent from './components/LayerContainerComponent';
import Image from './imagesObj';

function App() {
  const [userStatusPanelDisplay, setUserPanelDisplay] = React.useState('none' as string);
  const [searchPanelDisplay, setSearchPanelDisplay] = React.useState('none' as string);

  return (
    <Container>
      <SidebarComponent />
      <ServerSidebarComponent />
      <ServerContainerComponent />
    </Container>
  );
}

export default App;
