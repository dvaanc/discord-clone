import styled from "styled-components";

const ServerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #36393F;
`
const ServerNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  height: 48px;
  width: 100%;
  border-bottom: 1px solid #202225;
`
const ServerChatRoomContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`
const ServerChat = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  width: 300px;
  overflow: hidden scroll;
`
const ServerUserList = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  flex-shrink: 0;
  height: 100%;
  background-color: #2F3136;
`
// #b9bbbe
// #dcddde
export { ServerContainer, ServerNavBar, ServerChat, ServerUserList, ServerChatRoomContainer };