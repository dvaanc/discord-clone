import styled from "styled-components";
const ServerSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  width: 272px;
  flex-shrink: 0;
  height: 100%;
  background-color: #2F3136;
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
  color: white;
  transition: background-color .1s linear;
  &:hover {
    background-color: #33363C;
    cursor: pointer;
  }
`

export { ServerSidebar, ServerTitle };