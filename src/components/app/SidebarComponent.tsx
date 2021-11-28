import { Sidebar, SidebarItem, HomeButton, Icon, Pill } from '../../styles/appStyles/SidebarStyles';
import Image from '../../utility/imagesObj';

interface SidebarProps {

}
export default function SidebarComponent() {
  return(
    <Sidebar>
      <SidebarItem>
        <Pill />
        <HomeButton>
        <img src={Image.discordLogo} alt="" />
        </HomeButton>
      </SidebarItem>

      <SidebarItem>
        <Pill />
      </SidebarItem>
    </Sidebar>
  )
}