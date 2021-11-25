import Container from './styles/AppStyles';
import SidebarComponent from './components/SidebarComponent';
import ServerSidebarComponent from './components/ServerSidebarComponent';
import ServerContainerComponent from './components/ServerContainerComponent';
import LayerContainerComponent from './components/LayerContainerComponent';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 

function App() {
  const [userStatusPanelDisplay, setUserPanelDisplay] = React.useState(false as boolean);
  const [searchPanelDisplay, setSearchPanelDisplay] = React.useState(false as boolean);

  return (
    <Container>
      <SidebarComponent />
      <ServerSidebarComponent />
      <ServerContainerComponent />
      <LayerContainerComponent searchPanelDisplay={searchPanelDisplay} userStatusPanelDisplay={userStatusPanelDisplay}/>
    </Container>
  );
}

export default App;
