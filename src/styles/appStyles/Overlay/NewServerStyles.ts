import styled from "styled-components";

const NewServerModalContainer = styled.div<{ display: boolean }>`
  display: ${props => props.display ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  pointer-events: ${props => props.display ? 'all' : 'none'};
`

const NewServerModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 440px;
  height: 558px;
  overflow: hidden;
  background-color: #FFF;
  box-shadow: 0 0 0 1px rgba(185,187,190,.3),0 2px 10px 0 rgba(0,0,0,.1);
  border-radius: 4px;
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`
const SectionOne = styled(Section)`
  padding: 24px 16px 0;
  transition: box-shadow .1s ease-out,-webkit-box-shadow .1s ease-out;
  word-wrap: break-word;
  text-align: center;
  & h3 {
    font-weight: 700;
    color: #060607;
    font-size: 30px;
    line-height: 30px;
  }
  & span {
    margin-top: 8px;
    color: #4f5660;
    letter-spacing: 1px;
    font-size: 16px;
  }
  & button {
    position: absolute;
    top: 12px;
    right: 12;
  }
`
const SectionTwo = styled(Section)`
  padding: 0 8px 8px 16px;
  margin-top: 24px;
`
const SectionThree = styled(Section)`

`
const Option = styled.button`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(6,6,7,0.08);
  background-color: #fff;
  margin-bottom: 8px;
  cursor: pointer;
  width: 100%;
  padding: 0;
  outline: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #2e3338;
  &:hover {
    background-color: #F4F5F6;
  }
  & img:first-child {
    margin: 8px 8px 8px 16px;
    filter: saturate(1);
  }
  & img:last-child {
    margin-left: auto;
    margin-right: 16px;
  }
`

export {
  NewServerModalContainer,
  NewServerModalContent,
  Option,
  SectionOne,
  SectionTwo,
  SectionThree,
}