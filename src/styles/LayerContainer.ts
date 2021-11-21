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
const UserStatusPanel = styled.div<{ display: string, }>`
  display: ${props => props.display};
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
  & div:first-child {
    border-bottom: 1px solid hsla(0,0%,100%,0.06);
    padding-bottom: 10px;
  }
  & div:last-child {
    border-top: 1px solid hsla(0,0%,100%,0.06);
    padding-top: 10px;
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
  & span {
    display: flex;
    align-items: flex-start;
    padding-bottom: 4px;
    height: 100%;
  }
  & div {
    & p:nth-child(2) {
      font-size: 10px;
    }
  }
`
// const StatusItemImageContainer = styled.span`

// `
const SearchPanel = styled.div<{ display: string }>`
  position: fixed;
  top: 45px;
  right: 20px;
  display: ${props => props.display};
  flex-direction: column;
  min-width: 380px;
  height: auto;
  padding: 10px 15px;
  background-color: #36393F;
  box-shadow: 0 8px 16px rgba(0,0,0,0.24);
  color: #CACCCE;
  & div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding-left: 15px;
    font-size: 15px;

  }
`
const SearchPanelItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px 15px;
  height: 45px;
  width: 100%;
  font-size: 17px;
  cursor: pointer;
  border-radius: 4px;
  & img {
      display: none;
      width: 24px;
    }
  & span {
    display: flex;
    flex-direction: row;
    & h4 {
      letter-spacing: 1px;
    }
    & p {
      margin-left: 5px;
      color: #72767D;
    }
  }
  &:hover {
    background-color: rgba(79,84,92,0.16);
    img {
      display: flex;
    }
  }
`

export { 
  LayerContainer,
  UserStatusContainer,
  UserStatusPanel,
  StatusItem,
  SearchPanel,
  SearchPanelItem,
};