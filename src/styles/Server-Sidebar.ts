import styled from "styled-components";
const ServerSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  min-width: 13rem;
  height: 100%;
  background-color: #2F3136;
`
const ServerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 3rem;
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-bottom: 1px solid #202225;
  color: white;
  transition: background-color .1s linear;
  &:hover {
    background-color: #33363C;
    cursor: pointer;
  }
`

export { ServerSidebar, ServerTitle };