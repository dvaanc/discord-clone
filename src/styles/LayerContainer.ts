import styled from "styled-components";

const LayerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: none!important;
  pointer-events: none;
  z-index: 9999;
`
const UserStatusContainer = styled.div`
  position: fixed;
  left: 80px;
  bottom: 57px;
  pointer-events: auto;
`
const UserStatusPanel = styled.div<{ opacity: number, }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 240px;
  height: 300px;
  max-height: calc(100vh - 32px);
  padding: 6px 8px;
  cursor: default;
  background-color: #18191c;
  box-shadow: 0 8px 16px rgba(0,0,0,0.24);
  opacity: ${ props => props.opacity };
  transition: opacity .08s ease-out;
  border-radius: 4px;
  & div:nth-child(1) {
    border-bottom: 1px solid hsla(0,0%,100%,0.06);
    padding-bottom: 10px;
  }
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
`

export { LayerContainer, UserStatusContainer, UserStatusPanel, StatusItem };