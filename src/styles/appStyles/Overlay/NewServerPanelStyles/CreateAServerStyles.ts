import styled from "styled-components";

const Section = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`
const SectionOne = styled(Section)`
  position: relative;
  padding: 24px 16px 0;
  transition: box-shadow .1s ease-out,-webkit-box-shadow .1s ease-out;
  word-wrap: break-word;
  text-align: center;
  & h3 {
    font-weight: 700;
    color: #060607;
    font-size: 26px;
    line-height: 30px;
  }
  & span {
    margin-top: 8px;
    color: #4f5660;
    font-size: 14px;
  }
  & button {
    position: absolute;
    top: 12px;
    right: 12px;
    border: none;
    background-color: #FFF;
    opacity: .5;
    color: #4f5660;
    transition: opacity .2s ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: 1;
      color: #00000;
    }
  }
`
const SectionTwo = styled(Section)`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 8px 8px 16px;
  margin-top: 24px;
  overflow: hidden scroll;
  height: 330px;
  scrollbar-width: thin;
  scrollbar-color: rgba(79,84,92,0.3) transparent;
`
const SectionThree = styled(Section)`
  position: relative;
  padding: 16px;
  text-align: center;
  box-shadow: inset 0 1px 0 rgba(246,246,247,.6);
  backround-color: #f6f6f7;
  & h3 {
    margin-bottom: 8px;
    color: #060607;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
  & button {
    height: 38px;
    min-width: 96px;
    min-height: 38px;
    color: #fff;
    background-color: #747f8d;
    align-self: stretch;
    width: auto;
    transition: background-color .17s ease,color .17s ease;
    border: none;
    font-weight: 600;
    font-size: 14px;
    &:hover {
      background-color: #5E6772;
    }
  }
`
const Option = styled.button`
  display: flex;
  align-items: center;
  border-radius: 8px;
  position: relative;
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

const StartFromATemplate = styled.div`
  text-transform: uppercase;
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 16px;
  color: #4f5660;
  font-weight: 800;
`

export {
  Section,
  Option,
  SectionOne,
  SectionTwo,
  SectionThree,
  StartFromATemplate,
}