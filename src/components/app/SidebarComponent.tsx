import React, { useState, useEffect } from 'react';
import { Sidebar, SidebarItem, HomeButton, Icon, Pill, GreenButton } from '../../styles/appStyles/SidebarStyles';
import Image from '../../utility/imagesObj';
import { signOut } from "@firebase/auth"
import { toggleNewServerPanel } from '../../redux/features/newServerPanelSlice';
import { auth } from '../../firebase/firebase'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';

interface SidebarComponentProps {
  isLoading: boolean | null
}
export default function SidebarComponent( { isLoading }: SidebarComponentProps ) {
  const dispatch = useDispatch();
  const servers = useSelector (
    (state: RootState) => state.servers.servers);
    

  // useEffect(() => {
  //   if(isMounted) {
  //     if(serverList.length === 0) return;
  //     fetchServers(serverList)
  //       .then((res) => setServers(res))
  //   }
  // }, [serverList])

  useEffect(() =>  {
    if(servers.length === 0) return;
      console.log(servers)
    // servers.forEach((server: any, i: number) => {
    //   fetchServerImage(server.serverID)
    //     .then((res) => {
    //       servers[i].serverProfile = res
    //       return setServersDataExist(true);
    //     })
    // })
  }, [servers])


  const createServer = () => dispatch(toggleNewServerPanel(true))
  const handleClickServer = (e: React.MouseEvent): void => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    const serverID = target.dataset.serverid;
    const serverName = target.dataset.servername;
    console.log(serverID, serverName)
  }

  return(
    <Sidebar>
      <SidebarItem>
        <Pill />
        <HomeButton>
          <img src={Image.discordLogo} alt="" />
        </HomeButton>
      </SidebarItem>
    { servers.map((server: any) => {
      const pic = server.serverProfile;
      const name = server.serverName.slice(0, 1);
      return (
        <SidebarItem>
          <Pill />
            { pic ? 
            <Icon>
              <img 
              onClick={handleClickServer} 
              src={pic} alt="" 
              data-serverid={server.serverID} 
              data-servername={server.serverName}
              /> 
            </Icon>
            : 
            <HomeButton 
            onClick={handleClickServer} 
            data-serverid={server.serverID} 
            data-servername={server.serverName}>
              { name }
            </HomeButton>
            }
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
      <SidebarItem onClick={() => console.log(servers)} >
        <Pill />
        <HomeButton>
          test
        </HomeButton>
      </SidebarItem>
    </Sidebar>
  )
}