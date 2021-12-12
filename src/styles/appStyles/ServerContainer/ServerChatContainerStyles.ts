import styled from "styled-components";

const ServerChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #36393F;
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
  min-width: 140px;
  flex-grow: 1;
  flex-shrink: 0;
  overflow: hidden scroll;
`

// #b9bbbe
// #dcddde
export { ServerChatContainer, ServerChat, ServerChatRoomContainer };