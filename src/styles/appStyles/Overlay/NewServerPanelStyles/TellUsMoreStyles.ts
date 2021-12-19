import styled from "styled-components";
import { Section } from "./CreateAServerStyles";

const TellUsMoreModalContainer = styled.div<{ display: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 440px;
  height: 396px;
  overflow: hidden;
  background-color: #FFF;
  box-shadow: 0 0 0 1px rgba(185,187,190,.3),0 2px 10px 0 rgba(0,0,0,.1);
  border-radius: 4px;
  z-index: 3;
`
const SectionOne = styled(Section)`
`
const SectionTwo = styled(Section)`
`
const SectionThree = styled(Section)`
`


export { 
  TellUsMoreModalContainer,
  SectionOne,
  SectionTwo,
  SectionThree,
};