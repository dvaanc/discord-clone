import {  UserStatusContainer, UserStatusPanel, StatusItem, Seperator } from '../../../styles/appStyles/Overlay/OverlayStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store'
import React from 'react'
import Image from '../../../utility/imagesObj';

export default function UserStatusPanelComponent() {
  const userStatusPanel = useSelector(
    (state: RootState) => state.userStatusPanel.value);
  return (
    <UserStatusContainer>
    <UserStatusPanel display={userStatusPanel}>
      <StatusItem>
        <span>
        <img src={Image.onlineStatusIcon} alt="" />
        </span>
        <p>Online</p>
      </StatusItem>
      <Seperator />
      <StatusItem>
        <span>
          <img src={Image.idleStatusIcon} alt="" />
        </span>
        <p>Idle</p>
      </StatusItem>
      <StatusItem>
        <span>
          <img src={Image.doNoDisturbStatusIcon} alt="" />
        </span>
        <div>
          <p>Do Not Disturb</p>
          <p>You will not receive any desktop notifications.</p>
        </div>
      </StatusItem>
      <StatusItem>
        <span>
          <img src={Image.invisibleStatusIcon} alt="" />
        </span>
        <div>
          <p>Invisible</p>
          <p>You will not appear online, but you will have full access to all of Discord.</p>
        </div>
      </StatusItem>
      <Seperator />
      <StatusItem style={{ justifyContent: "space-between", alignItems: "center" }}>
        <h4>Edit Custom Status</h4>
        <span>
          <img src={Image.deleteStatusIcon} alt="" />
        </span>
      </StatusItem>
    </UserStatusPanel>
  </UserStatusContainer>
  )
}
