import React, { useState, useEffect } from 'react';
import { Sidebar, SidebarItem, HomeButton, Icon, Pill, GreenButton } from '../../styles/appStyles/SidebarStyles';
import Image from '../../utility/imagesObj';
import { signOut } from "@firebase/auth"
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from '@firebase/auth';
import { auth, db } from '../../firebase/firebase';
import { setCurrentUser } from '../../redux/features/currentUserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store'
import { collection, getDocs } from 'firebase/firestore/lite';

interface SidebarProps {

}
export default function SidebarComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [servers, setServers] = useState([] as any);
  const serverCollectionRef = collection(db, "servers");
  // const currentUser = useSelector(
  //   (state: RootState) => state.currentUser.user);
    onAuthStateChanged(auth, (currentUser) => {
    if(currentUser) return console.log(currentUser)
    if(currentUser === null ) navigate("/login");
  });
  useEffect(() => {
    const getServers = async () => {
      let isMounted: boolean = true; 
      
      const serversSnapshot = await getDocs(serverCollectionRef);
      // if(isMounted) console.log(data.forEach((doc) => console.log(doc.data())))
      const data = [] as any;
      if(isMounted) {
        serversSnapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id}))
        setServers(data);
      }
    }
    getServers();
  }, [])
  useEffect(() => {
    console.log(servers)
  }, [servers])

//   useEffect(() => {
//     onAuthStateChanged(auth, (currentUser) => {
//     dispatch(setCurrentUser(currentUser));
//   });
// }, [])
  // useEffect(() => {
  //   if(currentUser === null) {
  //     navigate("/login");
  //   }
  // }, [currentUser])


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
      <SidebarItem onClick={() => signOut(auth)} >
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
    </Sidebar>
  )
}