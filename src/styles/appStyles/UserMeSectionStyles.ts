import styled from "styled-components";
const FriendListSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  width: 260px;
  flex-shrink: 0;
  height: 100%;
  background-color: #2f3136;
`

const FriendListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #36393F;
`
const FriendListNavBar = styled.nav`
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

export { 
  FriendListContainer,
  FriendListSidebar,
  FriendListNavBar
}