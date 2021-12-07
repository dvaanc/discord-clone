import styled from "styled-components";
const ServerSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  width: 260px;
  flex-shrink: 0;
  height: 100%;
  background-color: #2f3136;
`
const ServerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 48px;
  width: 100%;
  padding-left: 35px;
  border-bottom: 1px solid #202225;
  font-size: 20px;
  color: #FFFFFF;
  transition: background-color .1s linear;
  &:hover {
    background-color: #33363C;
    cursor: pointer;
  }
`
const ServerChannelList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px 8px;
`
const ServerChannel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%; 
  height: 38px;
  padding: 0 5px;
  align-items: center;
  color: #8e9297;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  &:hover {
    background-color: #33363C;
    color: #FFFFFF;
  }
  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 100%;
    & span {
      margin-right: 8px;
    }
    & p {
      padding-bottom: 4px;
    }
  }
`
const UserPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  min-width: 100%;
  flex-shrink: 0;
  padding: 0 8px;
  background-color: #292b2f;
`
const Avatar = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`
export { 
  ServerSidebar, 
  ServerTitle, 
  ServerChannelList, 
  UserPanel, 
  Avatar, 
  ServerChannel 
};