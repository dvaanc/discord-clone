import styled from "styled-components";
import { Section } from "./CreateAServerStyles";

// const TellUsMoreModalContainer = styled.div<{ display: boolean }>`
//   display: flex;
//   position: relative;
//   flex-direction: column;
//   width: 440px;
//   height: 396px;
//   overflow: hidden;
//   background-color: #FFF;
//   box-shadow: 0 0 0 1px rgba(185,187,190,.3),0 2px 10px 0 rgba(0,0,0,.1);
//   border-radius: 4px;
//   z-index: 3;
// `

const TellUsMoreOptions = styled(Section)`
  padding: 0 16px 8px;
  margin-top: 24px;
  position: relative;
`
const TellUsMoreSectionThree = styled(Section)`
  margin-right: auto;
  padding: 16px;
  background-color: #f6f6f7;
	box-shadow: inset 0 1px 0 rgba(246,246,247,.6);
  & button { 
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
`
const SkipQuestion = styled.span`
  text-align: center;
  margin-top: 14px;
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 18px;
  color: #4f5660;
  & a {
    color: #0C6FE1;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export { 
  TellUsMoreOptions,
  TellUsMoreSectionThree,
  SkipQuestion,
};