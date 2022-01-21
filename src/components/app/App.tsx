import React, { useEffect, useState } from 'react';
import Container from '../../styles/appStyles/AppContainer';
import SidebarComponent from './SidebarComponent';
import ServerContainerComponent from './ServerContainer/ServerContainerComponent';
import LayerContainerComponent from './Overlay/Overlay';
import { onAuthStateChanged } from '@firebase/auth';
import { auth, db, fetchServerImage, fetchServers, fetchUserServerList, fetchChannels } from '../../firebase/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link, useNavigate } from 'react-router-dom';
import { setServers } from '../../redux/features/serversSlice';

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // isMounted for error with accessing before mounted with useEffects
  const [isMounted, setIsMounted] = useState(true as boolean);
  // sets currentUser ID from firebase auth
  const [currentUser, setCurrentUser] = useState('' as any);
  // a conditional for when state renders servers
  const [isLoading, setIsLoading] = useState(null as null | boolean);
  // contains relevenat server information to sidebar
  const [servers, setServers] = useState([] as any);
  // when user clicks server icon on sidebar, serverID is set on currentServer to render channels
  const currentServer = useSelector (
    (state: RootState) => state.currentServer.currentServer);
  const [currentChannels, setCurrentChannels] = useState([] as Array<any>);
  onAuthStateChanged(auth, (currentUser: any) => {
    if(currentUser === null) return navigate("/login");
    setCurrentUser(currentUser.uid);
  })

  useEffect(() => {
    if(isMounted) {
      if(currentUser === '') return;
      grabServerData()
    }
  }, [currentUser, isMounted])

  useEffect(() => { console.log(currentServer) }, [currentServer])
  useEffect(() => {
    if(!isMounted) return
    if(currentServer === null) return
    const channelData = fetchChannels(currentServer)
    console.log(channelData)
  }, [currentServer])

  const grabServerData = async () => {
    console.log('test')
    try {
      setIsLoading(true)
      const serverList = await fetchUserServerList(currentUser)
      const serverData = await fetchServers(serverList)
      setServers(serverData)
      setIsLoading(false)

    } catch(err) {
      if(err instanceof Error) console.error(err)
    }
  }
  return (
    <Container>
      <SidebarComponent servers={servers} isLoading={isLoading} />
      <ServerContainerComponent servers={servers}/> 
      <LayerContainerComponent />
    </Container>
  )
}
