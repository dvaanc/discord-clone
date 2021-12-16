import styled from "styled-components";

const UserStatusContainer = styled.div`
  position: fixed;
  left: 80px;
  bottom: 35px;
  pointer-events: auto;
`
const UserStatusPanel = styled.div<{ display: boolean }>`
  display: ${props => props.display === true ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: auto;
  max-height: calc(100vh - 32px);
  padding: 6px 8px;
  cursor: default;
  background-color: #18191c;
  box-shadow: 0 8px 16px rgba(0,0,0,0.24);
  transition: all .08s ease-out;
  border-radius: 4px;
  /* & div:nth-child(1) {
    border-bottom: 1px solid hsla(0,0%,100%,0.06);
    padding-bottom: 10px;
  } */
  /* & div:nth-child(5) {
    border-top: 1px solid hsla(0,0%,100%,0.06);
    padding-top: 10px;
    justify-content: space-between;
  } */
`
const StatusItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 24px;
  padding: 4px 8px;
  margin: 2px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #b9bbbe;
  cursor: pointer;
  border-radius: 2px;
  &:hover {
      background-color: #4752C4;
    }
  & span {
    display: flex;
    align-items: center;
    padding-bottom: 4px;
    height: 100%;
  }
  & div {
    & p:nth-child(2) {
      font-size: 10px;
    }
  }
`
const Seperator = styled.div`
  height: 5px;
  width: 100%;
  border-bottom: 1px solid hsla(0,0%,100%,0.06);
`
// const StatusItemImageContainer = styled.span`

// `

export { 
  UserStatusContainer,
  UserStatusPanel,
  StatusItem,
  Seperator,
}