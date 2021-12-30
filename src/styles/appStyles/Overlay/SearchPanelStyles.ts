import styled from "styled-components";

const SearchPanel = styled.div<{ display: boolean }>`
  position: fixed;
  top: 45px;
  right: 20px;
  display: ${props => props.display ? 'flex' : 'none'};
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
  SearchPanel,
  SearchPanelItem,
}