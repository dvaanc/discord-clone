import styled from "styled-components";
import { Section } from "./CreateAServerStyles";


const SectionTwo = styled(Section)<{ checkImage: boolean }>`
  height: 200px;
  padding-right: 8px;
  padding-left: 16px;
  margin: 16px 0;
  width: 100%;
  & div:first-child {
    position: relative;
    height: 80px;
    width: 80px;
    & img {
      height: 100%;
      width: 100%;
      background-color: #fff;
      border-radius: ${props => props.checkImage ? '50' : '0'}%;
      object-fit: cover;
    }
  }
`
const FileUploadInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  font-size: 0px;
  z-index: 2;
`
const ServerNameInputContainer = styled.div`
  text-align: start;
  margin-top: 24px;
  width: 100%;
  & h5 {
    color: #4f5660;
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 16px;
  }
`
const ServerNameInput = styled.input`
  padding-left: 10px;
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 4px;
  background-color: #FBFBFC;
  color: #2e3338;
  font-size: 16px;
  font-weight: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: border-color .2s ease-in-out;
  &:hover {
    border-color: rgba(0, 0, 0, 0.4);
  }
  &:focus {
    outline: none;
    border-color: hsl(197, 100%, 47.8%);
  }
`
const ServerCreationDisclaimer = styled.div`
  margin-top: 8px;
  padding-bottom: 4px;
  font-size: 12px;
  line-height: 16px;
  color: #747f8d;
  text-align: start;
  & a {
    font-weight: bold;
    color: #0068E0;
    font-size: 12px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
const SectionThree = styled(Section)`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  position: relative;
  height: 64px;
  padding: 16px;
  background-color: #f6f6f7;
  box-shadow: inset 0 1px 0 rgba(246,246,247,.6);
  margin-top: 24px;
  & button:first-child { 
    height: 38px;
    width: 35px;
    display: inline;
    padding: 2px 4px;
    background: transparent;
    cursor: pointer;
    border: none;
    color: #00000;
    font-size: 14px;
  }
  & button:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: hsl(235,85.6%,64.7%);
    min-height: 38px;
    min-width: 96px;
    transition: background-color .17s ease,color .17s ease;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    &:hover {
      background-color: #4752C4;
    }
  }
`

export { 
  SectionTwo, 
  SectionThree, 
  FileUploadInput, 
  ServerNameInput, 
  ServerNameInputContainer,
  ServerCreationDisclaimer,
};