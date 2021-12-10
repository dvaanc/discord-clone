import { Overlay } from '../../../styles/appStyles/Overlay/OverlayStyles';
import SearchPanelComponent from './SearchPaneComponentl';
import UserStatusPanelComponent from './UserStatusPanelComponent';

export default function LayerContainerComponent() {


  return (
    <Overlay>
      <SearchPanelComponent />
      <UserStatusPanelComponent />
    </Overlay>
  )
}

