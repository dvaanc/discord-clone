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
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: hidden scroll;
`
const ServerChat = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  overflow: hidden scroll;
`
const ServerInputContainer = styled.div`
  padding: 0 20px;
`
const ServerInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #40444B;
  border: 8px;
  width: 100%;
  min-height: 44px;
  flex-grow: 1;
  padding: 10px;

`
const ServerInputIcons = styled.div`
  display: flex;
  justify-content: space-evenly;

`
const ServerInput = styled.textarea`
  display: block;
  background-color: #40444B;
  color: #FFFFFF;
  border: none;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  width: 100%;
  min-height: 22px;
  overflow: none;
  resize: none;
  &:focus {
    border: none;
    outline: none;
  }
`
const MessageStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: 20px;
`
// #b9bbbe
// #dcddde
export { 
  ServerChatContainer, 
  ServerChat, 
  ServerChatRoomContainer, 
  ServerInputWrapper, 
  MessageStatus, 
  ServerInput, 
  ServerInputIcons,
  ServerInputContainer
};