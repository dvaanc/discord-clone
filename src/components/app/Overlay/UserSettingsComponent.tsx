import React from 'react'
import { 
  UserSettingsContainer, 
  UserSettingsLeftSidebar, 
  UserChangeSettings,  
} from '../../../styles/appStyles/Overlay/UserSettingsStyles'
import { useDispatch, useSelector } from 'react-redux';
import { toggleUserSettingsPanel } from '../../../redux/features/userSettingsPanelSlice';
import { RootState } from '../../../redux/store';
export default function UserSettingsComponent() {
  const dispatch = useDispatch();
  const userSettingsPanel = useSelector(
    (state: RootState) => state.userSettingsPanel.value);
  const hideUserSettingsPanel = () => dispatch(toggleUserSettingsPanel(false));
  
  return (
    <UserSettingsContainer display={userSettingsPanel}>
      <UserSettingsLeftSidebar>

      </UserSettingsLeftSidebar>
      <UserChangeSettings>

      </UserChangeSettings>
    </UserSettingsContainer>
  )
}
