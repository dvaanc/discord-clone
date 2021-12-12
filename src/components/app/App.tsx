import Container from '../../styles/appStyles/AppContainer';
import SidebarComponent from './SidebarComponent';
import ServerSidebarComponent from './ServerContainer/ServerSidebarComponent';
import ServerContainerComponent from './ServerContainer/ServerContainerComponent';
import LayerContainerComponent from './Overlay/Overlay';
import UserMeSectionComponent from './UserMeSectionComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function App() {
  const userSettingsPanel = useSelector(
    (state: RootState) => state.userSettingsPanel.value);
  return (
    <Container pointerEvents={userSettingsPanel}>
      <SidebarComponent />
      <ServerContainerComponent /> 
      <LayerContainerComponent />
    </Container>
  )
}
