import React from 'react';
import styled from 'styled-components';
import { Sidebar, SidebarItem, HomeButton, Icon, Pill } from './styles/Sidebar';
import { ServerTitle, ServerSidebar, ServerChannelList, UserPanel, Avatar, ServerChannel } from './styles/Server-Sidebar';
import { ServerContainer, ServerNavBar, ServerChat, ServerUserList, ServerChatRoomContainer, ServerNavFlexStartContainer, ServerNavFlexEndContainer, SearchInput } from './styles/ServerRoom';
import { LayerContainer, UserStatusContainer, UserStatusPanel, StatusItem, SearchPanel, SearchPanelItem, Seperator } from './styles/LayerContainer';
import Image from './imagesObj';
function App() {
  const [userStatusPanelDisplay, setUserPanelDisplay] = React.useState('none' as string);
  const [searchPanelDisplay, setSearchPanelDisplay] = React.useState('none' as string);
  const toggleUserStatusPanel = (e:React.MouseEvent): void => {
    userStatusPanelDisplay === 'none' ? setUserPanelDisplay('flex') : setUserPanelDisplay('none');
  }
  return (
    <Container>
      <Sidebar>
        <SidebarItem>
          <Pill />
          <HomeButton>
            <img src={Image.discordLogo} alt="" />
          </HomeButton>
        </SidebarItem>
        <SidebarItem>
          <Pill />
        </SidebarItem>
      </Sidebar>
      <ServerSidebar>
        <ServerTitle>
          <h5>Test Server</h5>
  
        </ServerTitle>
        <ServerChannelList>
          <ServerChannel>
            <div>
              <span>
                <img src={Image.channelHashIcon} alt="" />
              </span>
              <p>test</p>
            </div>

          </ServerChannel>
        </ServerChannelList>
        <UserPanel>
          <Avatar onClick={toggleUserStatusPanel}/>
        </UserPanel>
      </ServerSidebar>
      <ServerContainer>
        <ServerNavBar>
          <ServerNavFlexStartContainer>
            <span>
              <img src={Image.channelHashIcon} alt="" />
            </span>
            <h4>general</h4>
          </ServerNavFlexStartContainer>
          <ServerNavFlexEndContainer>
            <img src={Image.threadIcon} alt="" />
            <img src={Image.bellIcon} alt="" />
            <img src={Image.pinIcon} alt="" />
            <img src={Image.memberListIcon} alt="" />
            <SearchInput>
              <input type="text" placeholder="Search" />
              <img src={Image.magnifyingGlassIcon} alt="" />
            </SearchInput>
            <img src={Image.inboxIcon} alt="" />
            <img src={Image.helpIcon} alt="" />
          </ServerNavFlexEndContainer>
        </ServerNavBar>
        <ServerChatRoomContainer>
          <ServerChat>

          </ServerChat>
          <ServerUserList>

          </ServerUserList>
        </ServerChatRoomContainer>
        </ServerContainer>
        <LayerContainer>
          <UserStatusContainer>
            <SearchPanel display={searchPanelDisplay}>
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
            <UserStatusPanel display={userStatusPanelDisplay}>
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 100%;
  /* background-color: #36393F; */
  background-color: darkred;
`
export default App;
