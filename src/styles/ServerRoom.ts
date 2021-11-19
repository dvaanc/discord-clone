import styled from "styled-components";

const ServerRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80vh;
  height: 100%;
  background-color: #36393F;
`
const ServerNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  height: 3rem;
  width: 100%;
  border-bottom: 1px solid #202225;
`

export { ServerRoomContainer, ServerNavBar };