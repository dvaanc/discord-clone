import styled from "styled-components";

const ServerChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
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
const ServerInputFormContainer = styled.form`
  padding: 0 20px;
`
const ServerInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #40444B;
  width: 100%;
  min-height: 44px;
  flex-grow: 1;
  border-radius: 12px;
`
const UploadIconWrapper = styled.span`
  display: flex;
  align-items: center;
  width: 80px;
  min-height: 100%;
  padding: 0 15px;
  cursor: pointer;
`
const ServerInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #40444B;
  color: #FFFFFF;
  border: none;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  width: 100%;
  min-height: 100%;
  overflow-wrap: break-word;
  &:focus {
    border: none;
    outline: none;
  }
`
const ServerInputIcons = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  min-width: 140px;
  gap: 7px;
  & img {
    min-height: 24px;
    width: 24px;
    cursor: pointer;
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
  ServerInputFormContainer,
  UploadIconWrapper,

};                            