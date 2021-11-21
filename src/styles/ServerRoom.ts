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
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  flex-shrink: 0;
  height: 48px;
  width: 100%;
  border-bottom: 1px solid #202225;
  color: #FFFFFF;
  & span:first-child {
    margin-right: 8px;
  }
  & h4 {
    font-size: 16px;
    padding-bottom: 3px;
    letter-spacing: 1px;
  }
`
const ServerNavFlexStartContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
    height: 100%;
    z-index: 1;

`
const ServerNavFlexEndContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  min-width: 600px;
  height: 100%;
  flex-shrink: 0;
  gap: 15px;
  z-index: 2;
  & img:hover {
    cursor: pointer;
  }
`
const SearchInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #202225;
  padding-right: 5px;
  width: auto;
  border-radius: 4p5;
  & img {
    height: 20px;
  }
  & input[type="text"] {
    min-width: 150px;
    height: 27px;
    background-color: #202225;
    border: none;
    border-radius: 4px;
    padding-left: 5px;
    color: #FFFFFF;
    font-size: 16px;
    &:focus {
      outline: none;
      min-width: 300px;
    }
  }
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
  overflow: hidden scroll;
`
const ServerUserList = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  flex-shrink: 0;
  height: 100%;
  background-color: #2F3136;
`
// #b9bbbe
// #dcddde
export { 
  ServerContainer, 
  ServerNavBar, 
  ServerChat, 
  ServerUserList, 
  ServerChatRoomContainer,
  ServerNavFlexStartContainer,
  ServerNavFlexEndContainer,
  SearchInput,
};