import React from 'react';
import { Sidebar, SidebarItem, HomeButton, Icon, Pill } from '../../styles/appStyles/SidebarStyles';
import Image from '../../utility/imagesObj';
import { signOut } from "@firebase/auth"
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../../firebase/firebase';
import { setCurrentUser } from '../../redux/features/currentUserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store'

interface SidebarProps {

}
export default function SidebarComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(
    (state: RootState) => state.currentUser.user);
  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
    console.log(currentUser);
    dispatch(setCurrentUser(currentUser));
  });
}, [])
  React.useEffect(() => {
    console.log(currentUser);
    if(currentUser === null) {
      navigate("/login");
    }
  }, [currentUser])

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
    </Sidebar>
  )
}