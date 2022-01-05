import React, { useState, useEffect } from 'react';
import { Sidebar, SidebarItem, HomeButton, Icon, Pill, GreenButton } from '../../../styles/appStyles/SidebarStyles';
import Image from '../../../utility/imagesObj';
import { signOut } from "@firebase/auth"
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from '@firebase/auth';
import { auth, db, fetchServerImage, fetchServers } from '../../../firebase/firebase';
import { toggleNewServerPanel } from '../../../redux/features/newServerPanelSlice';
import { useDispatch } from 'react-redux';
import { fetchUserServerList } from '../../../firebase/firebase'
export default function SidebarComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [servers, setServers] = useState([] as any);
  const [serverList, setServerList] = useState([] as any);
  const [currentUser, setCurrentUser] = useState('' as any);
  const [isMounted, setIsMounted] = useState(true as boolean);
  const [serversTrue, setServersTrue] = useState(false as boolean);

  onAuthStateChanged(auth, (currentUser: any) => {
    if(currentUser === null) return navigate("/login");
    setCurrentUser(currentUser.uid);
  })

  useEffect(() => {
    if(isMounted) {
      if(currentUser === '') return;
      fetchUserServerList(currentUser)
        .then((res) => setServerList(res));
    }

  },[currentUser, isMounted])

  useEffect(() => {
    if(isMounted) {
      if(serverList.length === 0) return;
      fetchServers(serverList)
        .then((res) => setServers(res))
    }
  }, [serverList])

  useEffect(() =>  {
    if(servers.length === 0) return;
      setServers(servers)
    // servers.forEach((server: any, i: number) => {
    //   fetchServerImage(server.serverID)
    //     .then((res) => {
    //       servers[i].serverProfile = res
    //       return setServersDataExist(true);
    //     })
    // })
  }, [servers])

  const test = () => {
    console.log(servers);  
  }
  const createServer = () => dispatch(toggleNewServerPanel(true))
  // const renderServersToSidebar = () => {
  //   console.log(servers.length)
  //   return (

  //   )
  // }
  return(
    <Sidebar>
      <SidebarItem>
        <Pill />
        <HomeButton>
          <img src={Image.discordLogo} alt="" />
        </HomeButton>
      </SidebarItem>
      { servers.forEach((server: any) => {
        return (
          <SidebarItem>
            <Pill />
            <Icon>
              <img src={server.serverProfile} alt="" />
            </Icon>
          </SidebarItem>
        )
      }) }

      <SidebarItem onClick={createServer} >
        <GreenButton>
          <img src={Image.createServerIcon} alt="" />
        </GreenButton>
      </SidebarItem>
      <SidebarItem>
        <GreenButton>
            <img src={Image.explorePublicServerIcon} alt="" />
        </GreenButton>
      </SidebarItem>
      <SidebarItem>
        <GreenButton>
          <img src={Image.downloadAppIcon} alt="" />
        </GreenButton>
      </SidebarItem>
      <SidebarItem onClick={() => signOut(auth)} >
        <Pill />
        <HomeButton>
          Quit
        </HomeButton>
      </SidebarItem>
      <SidebarItem onClick={test} >
        <GreenButton>
          test
        </GreenButton>
      </SidebarItem>
    </Sidebar>
  )
}