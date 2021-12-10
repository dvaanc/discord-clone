import styled from "styled-components";

const UserSettingsContainer = styled.div<{display: boolean}>`
  display: ${props => props.display ? 'flex' : 'none'};
  flex-direction: row;
  z-index: 10;
  height: 100%;
  width: 100%;
`
const UserSettingsLeftSidebar = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow-y: scroll;
  background-color: #2f3136;
`
const UserChangeSettings = styled.div`
`
