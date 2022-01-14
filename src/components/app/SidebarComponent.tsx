import React, { useState, useEffect } from 'react';
import { Sidebar, SidebarItem, HomeButton, Icon, Pill, GreenButton } from '../../styles/appStyles/SidebarStyles';
import Image from '../../utility/imagesObj';
import { signOut } from "@firebase/auth"
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from '@firebase/auth';
import { auth, db, fetchServerImage, fetchServers } from '../../firebase/firebase';
import { toggleNewServerPanel } from '../../redux/features/newServerPanelSlice';
import { useDispatch } from 'react-redux';
import { fetchUserServerList } from '../../firebase/firebase'
export default function SidebarComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [servers, setServers] = useState([] as any);
  const [currentUser, setCurrentUser] = useState('' as any);
  const [isMounted, setIsMounted] = useState(true as boolean);
  const [isLoading, setIsLoading] = useState(null as null | boolean);
  onAuthStateChanged(auth, (currentUser: any) => {
    if(currentUser === null) return navigate("/login");
    setCurrentUser(currentUser.uid);
  })

  useEffect(() => {
    if(isMounted) {
      if(currentUser === '') return;
      grabServerData()
      // fetchUserServerList(currentUser)
        // .then((res) => setServerList(res));
    }

  }, [currentUser, isMounted])

  // useEffect(() => {
  //   if(isMounted) {
  //     if(serverList.length === 0) return;
  //     fetchServers(serverList)
  //       .then((res) => setServers(res))
  //   }
  // }, [serverList])

  useEffect(() =>  {
    if(servers.length === 0) return;
      renderServersToSidebar()
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
  const grabServerData = async () => {
    try {
      setIsLoading(true)
      const serverList = await fetchUserServerList(currentUser)
      const servers = await fetchServers(serverList)
      setServers(servers)
      setIsLoading(false)
    } catch(err) {
      if(err instanceof Error) console.error(err)
    }

  }
  const createServer = () => dispatch(toggleNewServerPanel(true))
  const renderServersToSidebar = () => {
    console.log(servers.length)
    servers.forEach((server: any) => {
      return (
        <SidebarItem>
        <Pill />
        <Icon>
          <img src={server.serverProfile} alt="" />
        </Icon>
      </SidebarItem>
      )
    })

  }
  return(
    <Sidebar>
      <SidebarItem>
        <Pill />
        <HomeButton>
          <img src={Image.discordLogo} alt="" />
        </HomeButton>
      </SidebarItem>
    { !isLoading && 
      servers.forEach((server: any) => {
        return (
          <SidebarItem>
          <Pill />
          <Icon>
            <img src={server.serverProfile} alt="" />
          </Icon>
        </SidebarItem>
        )
      })

    }
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