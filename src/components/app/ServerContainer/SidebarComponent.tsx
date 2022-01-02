import React, { useState, useEffect } from 'react';
import { Sidebar, SidebarItem, HomeButton, Icon, Pill, GreenButton } from '../../../styles/appStyles/SidebarStyles';
import Image from '../../../utility/imagesObj';
import { signOut } from "@firebase/auth"
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from '@firebase/auth';
import { auth, db } from '../../../firebase/firebase';
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
  });
  useEffect(() => {
    if(currentUser !== '') {
      fetchUserServerList(currentUser)
        .then((res) => {
          setServerList(res)
          console.log(currentUser)
          console.log(res)
        })
    }
  },[currentUser])

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
    console.log(serverList);  
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
      <SidebarItem onClick={() => signOut(auth)} >
        <Pill />
        <HomeButton>
          Quit
        </HomeButton>
      </SidebarItem>
      <SidebarItem onClick={createServer} >
        <GreenButton>
          <img src={Image.createServerIcon} alt="" />
        </GreenButton>
      </SidebarItem>
      <SidebarItem onClick={() => signOut(auth)} >
        <GreenButton>
            <img src={Image.explorePublicServerIcon} alt="" />
        </GreenButton>
      </SidebarItem>
      <SidebarItem onClick={() => signOut(auth)} >
        <GreenButton>
          <img src={Image.downloadAppIcon} alt="" />
        </GreenButton>
      </SidebarItem>
      <SidebarItem onClick={test} >
        <GreenButton>
          <img src={Image.downloadAppIcon} alt="" />
        </GreenButton>
      </SidebarItem>
    </Sidebar>
  )
}