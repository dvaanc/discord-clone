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
  return (
    <Container>
      <SidebarComponent />
      <ServerSidebarComponent />
      <ServerContainerComponent />
      <LayerContainerComponent />
    </Container>
  );
}

export default App;
