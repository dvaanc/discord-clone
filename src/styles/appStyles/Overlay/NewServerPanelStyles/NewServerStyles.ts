import styled, { keyframes } from "styled-components";
const LoadNewServerModalContent = keyframes`
  0% {
    transform: scale(0.5);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

const NewServerModalContainer = styled.div<{ display: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.75);
  opacity: ${props => props.display ? '1' : '0'};
  pointer-events: ${props => props.display ? 'all' : 'none'};
  transition: opacity ease-in 0.15s;
`

const NewServerModalContent = styled.div<{ display: boolean, height: string }>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 440px;
  height: ${props => props.height}px;
  overflow: hidden;
  background-color: #FFF;
  box-shadow: 0 0 0 1px rgba(185,187,190,.3),0 2px 10px 0 rgba(0,0,0,.1);
  border-radius: 4px;
  z-index: 3;
  transform: ${ props => props.display ? 'scale(1)' : 'scale(0.8)'};
  transition: transform ease-in-out .15s;
  /* animation-name: ${LoadNewServerModalContent};
  animation-duration: .15s; */
`

export {
  NewServerModalContainer,
  NewServerModalContent,
}