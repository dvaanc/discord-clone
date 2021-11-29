import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
const CharacterBackground = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  object-fit: fill;
`




export { CharacterBackground, LoginContainer };