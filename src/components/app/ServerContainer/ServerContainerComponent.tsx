import ServerChatContainerComponent from './ServerChatContainerComponent';
import ServerSidebarComponent from './ServerSidebarComponent';
import ServerContainer from '../../../styles/appStyles/ServerContainer/ServerContainerStyles';
import MemberListSidebarComponent from './MemberListSidebarComponent';
export default function ServerContainerComponent() {
  return (
    <ServerContainer>
      <ServerSidebarComponent />
      <ServerChatContainerComponent />
      <MemberListSidebarComponent />
    </ServerContainer>

  )
}