import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Container from './styles/AppStyles';
import SidebarComponent from './components/SidebarComponent';
import ServerSidebarComponent from './components/ServerSidebarComponent';
import ServerContainerComponent from './components/ServerContainerComponent';
import LayerContainerComponent from './components/LayerContainerComponent';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

function App() {
  const [userStatusPanelDisplay, setUserPanelDisplay] = React.useState(false as boolean);
  const [searchPanelDisplay, setSearchPanelDisplay] = React.useState(false as boolean);
  const userStatusPanel = useSelector((state: RootState) => state.userStatusPanel.value);
  const toggleUserStatusPanel = (): void => {
    userStatusPanelDisplay === false ? setUserPanelDisplay(true) : setUserPanelDisplay(false);
  }
  return (
    <Container>
      <SidebarComponent />
      <ServerSidebarComponent toggleUserStatusPanel={toggleUserStatusPanel}/>
      <ServerContainerComponent />
      <LayerContainerComponent 
      searchPanelDisplay={searchPanelDisplay} 
      userStatusPanelDisplay={userStatusPanel}
      />
    </Container>
  );
}

export default App;
