import { 
  LayerContainer, 
  UserStatusContainer, 
  UserStatusPanel, 
  StatusItem, 
  SearchPanel, 
  SearchPanelItem, 
  Seperator 
} from '../styles/LayerContainerStyles';
import Image from '../imagesObj';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store'

export default function LayerContainerComponent() {
  const userStatusPanel = useSelector(
    (state: RootState) => state.userStatusPanel.value);
  const searchPanel = useSelector(
    (state: RootState) => state.searchPanel.value);
  return (
    <LayerContainer>
    <UserStatusContainer>
      <SearchPanel display={searchPanel}>
        <div>
          <p>SEARCH OPTIONS</p>
          <img src="" alt="" />
        </div>
      <SearchPanelItem>
        <span>
          <h4>from:</h4>
          <p>user</p>
        </span>
        <img src={Image.addSearchIcon} alt="" />
      </SearchPanelItem>
      <SearchPanelItem>
        <span>
          <h4>mentions:</h4>
          <p>user</p>
        </span>
        <img src={Image.addSearchIcon} alt="" />
      </SearchPanelItem>
      <SearchPanelItem>
        <span>
          <h4>has:</h4>
          <p>link, embed or file</p>
        </span>
        <img src={Image.addSearchIcon} alt="" />
      </SearchPanelItem>
      <SearchPanelItem>
        <span>
          <h4>before:</h4>
          <p>specific date</p>
        </span>
        <img src={Image.addSearchIcon} alt="" />
      </SearchPanelItem>
      <SearchPanelItem>
        <span>
          <h4>during:</h4>
          <p>specific date</p>
        </span>
        <img src={Image.addSearchIcon} alt="" />
      </SearchPanelItem>
      <SearchPanelItem>
        <span>
          <h4>after:</h4>
          <p>specific date</p>
        </span>
        <img src={Image.addSearchIcon} alt="" />
      </SearchPanelItem>
      <SearchPanelItem>
        <span>
          <h4>in:</h4>
          <p>channel</p>
        </span>
        <img src={Image.addSearchIcon} alt="" />
      </SearchPanelItem>
      </SearchPanel>
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
  </LayerContainer>
  )
}

