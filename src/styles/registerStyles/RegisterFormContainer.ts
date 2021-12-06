import styled from "styled-components";
import { 
  LoginInput, 
  InputGroup, 
  LoadWindow, 
  LoginButton, 
  ForgotPassButtonWrapper, 
} from "../loginStyles/LoginFormContainer";

const RegisterFormContainer = styled.div`
  display: block;
  width: 480px;
  height: 570px;
  padding: 32px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  background-color: #36393f;
  border-radius: 4px;
  z-index: 3;
  animation: ${LoadWindow} 0.17s 0s both;
  user-select: none;
`
const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    color: #FFFFFF;
    letter-spacing: 1px;
    font-size: 27px;
    margin-bottom: 10px;
  }
`
const RegisterInput = styled(LoginInput)`
  height: 40px;
`
const DateOfBirth = styled(InputGroup)`
  flex-direction: column;
  & label {
    font-size: 12px;
    font-weight: bold;
    color: #B9BBBE;
    margin-bottom: 8px;
  }
`
const DoBWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 21px;
`
const DoBInput = styled.div<{textColour: string}>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  background-color: #313339;
  color: ${ props => props.textColour === 'Select' ? 'rgb(114, 118, 125)' : '#FFFFFF' };
  font-size: 16px;
  font-weight: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: border-color .2s ease-in-out;
  letter-spacing: 1px;
  &:hover {
    border-color: #040405;
  }
`
const DoBDropUpMenu = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  height: 155px;
  background-color: #313339;
  z-index: 5;
  bottom: 40px;
  overflow-y: scroll;
  & span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;
    padding: 0 10px;
    color: #B9BBBE;
    cursor: pointer;
    &:hover {
      background-color: #36393F;
    }
  }
`

const MonthWrapper = styled(DoBDropUpMenu)<{display: boolean}>`
  display: ${props => props.display ? 'flex' : 'none'};
  width: 154px;
  /* #313339; */
`
const DayWrapper = styled(DoBDropUpMenu)<{display: boolean}>`
  display: ${props => props.display ? 'flex' : 'none'};
  width: 100px;
`
const YearWrapper = styled(DoBDropUpMenu)<{display: boolean}>`
  display: ${props => props.display ? 'flex' : 'none'};
  width: 120px;
`
const MonthInput = styled(DoBInput)`
  width: 154px;
`
const DayInput = styled(DoBInput)`
  width: 100px;
`
const YearInput = styled(DoBInput)`
  width: 120px;
`
const DropUpItem = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 0 10px;
  color: #B9BBBE;
  cursor: pointer;
  &:hover {
    background-color: #36393F;
  }
`
const RegisterButton = styled(LoginButton)`
  height: 48px;
`
const AlreadyHaveAnAccount = styled(ForgotPassButtonWrapper)`
`
const TermsOfServiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 15px;
  margin-top: 25px;
  gap: 2px;
  & p {
    color: #72767d;
    font-size: 12px;
  }
  & button {
    color: #01ACF0;
    font-size: 12px;
    text-decoration: none;
    background-color: #36393F;
    border: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
export { 
  RegisterFormContainer, 
  RegisterForm, 
  RegisterInput, 
  DateOfBirth, 
  DoBInput,
  MonthInput,
  DayInput,
  YearInput,
  DoBWrapper,
  DropUpItem, 
  RegisterButton,
  AlreadyHaveAnAccount,
  TermsOfServiceWrapper,
  MonthWrapper,
  DayWrapper,
  YearWrapper,
};