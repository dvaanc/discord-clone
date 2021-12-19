import { Overlay } from '../../../styles/appStyles/Overlay/OverlayStyles';
import NewServerCompoennt from './NewServerPanelComponent/NewServerPanelComponent';
import SearchPanelComponent from './SearchPaneComponentl';
import UserSettingsComponent from './UserSettingsComponent';
import UserStatusPanelComponent from './UserStatusPanelComponent';

export default function LayerContainerComponent() {

  return (
    <Overlay>
      <SearchPanelComponent />
      <UserStatusPanelComponent />
      <UserSettingsComponent />
      <NewServerCompoennt />
    </Overlay>
  )
}

