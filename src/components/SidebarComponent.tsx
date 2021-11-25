import { Sidebar, SidebarItem, HomeButton, Icon, Pill } from '../styles/SidebarStyles';
import Image from '../imagesObj';
function SidebarComponent() {
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

export default SidebarComponent;