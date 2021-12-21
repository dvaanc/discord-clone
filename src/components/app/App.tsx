import Container from '../../styles/appStyles/AppContainer';
import SidebarComponent from './ServerContainer/SidebarComponent';
import ServerContainerComponent from './ServerContainer/ServerContainerComponent';
import LayerContainerComponent from './Overlay/Overlay';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function App() {
  const userSettingsPanel = useSelector(
    (state: RootState) => state.userSettingsPanel.value);
  return (
    <Container>
      <SidebarComponent />
      <ServerContainerComponent /> 
      <LayerContainerComponent />
    </Container>
  )
}
