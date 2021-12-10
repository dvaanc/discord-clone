import Container from '../../styles/appStyles/AppContainer';
import SidebarComponent from './SidebarComponent';
import ServerSidebarComponent from './ServerSidebarComponent';
import ServerContainerComponent from './ServerContainerComponent';
import LayerContainerComponent from './Overlay/Overlay';

export default function App() {
  return (
    <Container>
      <SidebarComponent />
      <ServerSidebarComponent />
      <ServerContainerComponent />
      <LayerContainerComponent />
    </Container>
  )
}
