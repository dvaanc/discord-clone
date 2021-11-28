import Container from '../../styles/appStyles/AppContainer';
import SidebarComponent from './SidebarComponent';
import ServerSidebarComponent from './ServerSidebarComponent';
import ServerContainerComponent from './ServerContainerComponent';
import LayerContainerComponent from './LayerContainerComponent';

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
