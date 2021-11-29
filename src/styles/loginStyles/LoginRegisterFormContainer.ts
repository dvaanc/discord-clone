import styled, { keyframes } from "styled-components";
import { LoginInput, InputGroup, LoadWindow } from "./LoginFormContainer";
const RegisterFormContainer = styled.div`
  width: 480px;
  height: 570px;
  padding: 32px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  background-color: #36393f;
  border-radius: 4px;
  z-index: 3;
  animation: ${LoadWindow} 0.17s 0s both;
`
const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    color: #FFFFFF;
    letter-spacing: 1px;
    font-size: 26px;
    margin-bottom: 10px;
  }
`
const RegisterInput = styled(LoginInput)`
  height: 40px;
`
const DateOfBirth = styled(InputGroup)`
  flex-direction: column;

`
const DoBWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 21px;
  & div:nth-child(1) {
    width: 154px;
  }
  & div:nth-child(2) {
    width: 100px;
  }
  & div:nth-child(3) {
    width: 120px;
  }
`
const DoBInput = styled.div`
  padding-left: 10px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #313339;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: border-color .2s ease-in-out;
  &:hover {
    border-color: #040405;
  }
`

export { RegisterFormContainer, RegisterForm, RegisterInput, DateOfBirth, DoBInput, DoBWrapper };