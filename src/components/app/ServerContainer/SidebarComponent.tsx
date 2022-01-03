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

  onAuthStateChanged(auth, (currentUser: any) => {
    if(currentUser === null || undefined ) navigate("/login");
    if(currentUser) return setCurrentUser(currentUser.uid);
  })

  useEffect(() => {
    if(currentUser === '') return;
    fetchUserServerList(currentUser)
      .then((res) => setServerList(res))
  },[currentUser])

  useEffect(() => {
    if(serverList.length === 0) return;
    fetchServers(serverList)
      .then((res) => setServers(res))
      // .then(() => console.log(servers))
  }, [serverList])

  useEffect(() =>  {
    if(servers.length === 0) return;
    // servers.forEach((server: any, i: number) => {
    //   fetchServerImage(server.serverID)
    //     .then((res) => servers[i].serverProfile = res);
    // })
    console.log(servers);
  }, [servers])
  // useEffect(() => {
  //   if(servers.length > 0) console.log(servers);
  //   if(serverList.length >  0) console.log(serverList);
  // }, [servers, serverList])
  // useEffect(() => {
  //   const getServers = async () => {
  //     let isMounted: boolean = true; 
      
  //     const serversSnapshot = await getDocs(serverCollectionRef);
  //     // if(isMounted) console.log(data.forEach((doc) => console.log(doc.data())))
  //     const data = [] as any;
  //     if(isMounted) {
  //       serversSnapshot.forEach((doc) => {
  //         data.push({ ...doc.data(), id: doc.id});
  //         // const serverImage = ref(storage, `serverAssets/${doc.id}/serverImage.png`)
  //         // console.log(serverImage);
  //       });
  //       setServers(data);
  //     }
  //   }
  //   getServers();
  // }, [])
  // useEffect(() => {
  //   console.log(servers)
  // }, [servers])

  const test = () => {
    console.log(servers);  
  }
  const createServer = () => dispatch(toggleNewServerPanel(true))
  const loadServer = () => {
    return (
      <SidebarItem onClick={() => signOut(auth)} >
        <Pill />
        <HomeButton>
          Quit
        </HomeButton>
      </SidebarItem>
    )
  }
  return(
    <Sidebar>
      <SidebarItem>
        <Pill />
        <HomeButton>
          <img src={Image.discordLogo} alt="" />
        </HomeButton>
      </SidebarItem>
      { servers.forEach((server: any) => {
        
        return(
          <SidebarItem>
            <Pill />
            <HomeButton>
              <img src={Image.discordLogo} alt="" />
            </HomeButton>
        </SidebarItem>
        )
      })}
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