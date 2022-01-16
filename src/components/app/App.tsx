import React, { useEffect, useState } from 'react';
import Container from '../../styles/appStyles/AppContainer';
import SidebarComponent from './SidebarComponent';
import ServerContainerComponent from './ServerContainer/ServerContainerComponent';
import LayerContainerComponent from './Overlay/Overlay';
import { onAuthStateChanged } from '@firebase/auth';
import { auth, db, fetchServerImage, fetchServers, fetchUserServerList } from '../../firebase/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link, useNavigate } from 'react-router-dom';
import { setServers } from '../../redux/features/serversSlice';

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(true as boolean);
  const [currentUser, setCurrentUser] = useState('' as any);
  const [isLoading, setIsLoading] = useState(null as null | boolean);

  onAuthStateChanged(auth, (currentUser: any) => {
    if(currentUser === null) return navigate("/login");
    setCurrentUser(currentUser.uid);
  })

  useEffect(() => {
    if(isMounted) {
      if(currentUser === '') return;
      grabServerData()
    }
  }, [])

  const grabServerData = async () => {
    try {
      setIsLoading(true)
      const serverList = await fetchUserServerList(currentUser)
      const servers = await fetchServers(serverList)
      dispatch(setServers(servers))
      setIsLoading(false)
    } catch(err) {
      if(err instanceof Error) console.error(err)
    }
  }
  return (
    <Container>
      <SidebarComponent isLoading={isLoading} />
      <ServerContainerComponent /> 
      <LayerContainerComponent />
    </Container>
  )
}
