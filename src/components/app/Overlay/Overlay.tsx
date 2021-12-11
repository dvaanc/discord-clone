import { Overlay } from '../../../styles/appStyles/Overlay/OverlayStyles';
import SearchPanelComponent from './SearchPaneComponentl';
import UserSettingsComponent from './UserSettingsComponent';
import UserStatusPanelComponent from './UserStatusPanelComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';

export default function LayerContainerComponent() {

  return (
    <Overlay>
      <SearchPanelComponent />
      <UserStatusPanelComponent />
      <UserSettingsComponent />
    </Overlay>
  )
}

