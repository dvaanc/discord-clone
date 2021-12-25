import styled from "styled-components";
import { Section } from "./CreateAServerStyles";


const SectionTwo = styled(Section)<{ currentImage: boolean }>`
  height: 200px;
  padding-right: 8px;
  padding-left: 16px;
  margin: 16px 0;
  & div {
    padding-top: 8px;
    & span {
      height: 80px;
      width: 80px;
      & img {
        background-color: #fff;
        margin: 0 auto;
        border-radius: ${props => props.currentImage ? '50' : '0'}%;
      }
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
`
const SectionThree = styled(Section);

export { SectionTwo, SectionThree, FileUploadInput };