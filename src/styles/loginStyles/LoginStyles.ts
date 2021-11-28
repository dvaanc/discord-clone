import styled from "styled-components";
const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
const CharacterBackground = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  object-fit: fill;
`
const LoginFormContainer = styled.div`
  width: 480px;
  height: 415px;
  background-color: #36393f;
  z-index: 3;
  border-radius: 4px;
  padding: 30px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
`
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    color: #FFFFFF;
    letter-spacing: 1px;
  }
  & h4 {
    font-weight: 200;
    color: #B9BBBE;
    font-size: 15px;
    margin-top: 10px;
  }
`
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`
const MessageField = styled.div<{err: boolean}>`
  display: flex;
  align-items: center;
  color: ${props => props.err ? 'hsl(359, 82.6%, 59.4%)' : '#B9BBBE'};
  margin-bottom: 8px;
  & label {
  font-size: 12px;
  font-weight: bold;
  }
`
const ErrMessage = styled.div<{err: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: ${props => props.err ? 1 : 0};
  font-size: 12px;
  font-style: italic;
  color: hsl(359, 82.6%, 59.4%);
  & span {
    margin: 0 5px;
    height: 1px;
    width: 4px;
    background-color: hsl(359, 82.6%, 59.4%);
  }
`
const LoginInput = styled.input<{err: boolean}>`
  padding-left: 10px;
  height: 45px;
  border: none;
  border-radius: 4px;
  background-color: #313339;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: none;
  border: 1px solid ${props => props.err ? 'hsl(359, 82.6%, 59.4%)' : 'rgba(0, 0, 0, 0.3)'};
  transition: border-color .2s ease-in-out;
  &:hover {
    border-color: ${props => props.err ? 'hsl(359, 82.6%, 59.4%)' : '#040405'};
  }
  &:focus {
    outline: none;
    border-color: ${props => props.err ? 'hsl(359, 82.6%, 59.4%)' : 'hsl(197, 100%, 47.8%)'};
  }
`
const ForgotPassButtonWrapper = styled.div `
  display: flex; 
  justify-content: flex-start;
  width: 100%;
  margin-top: 8px;
  & button {
    color: #01ACF0;
    text-decoration: none;
    font-size: 13px;
    background-color: #36393F;
    border: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: hsl(235, 85.6%, 64.7%);
  width: 100%;
  outline: none;
  border: none;
  border-radius: 4px;
  height: 44px;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  transition: background-color .17s ease,color .17s ease;
  cursor: pointer;
  &:hover {
    background-color: #4752C4;
  }
`
const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 15px;
  margin-top: 10px;
  & p {
    color: #72767d;
    font-size: 14px;
    margin-right: 5px;
  }
  & button {
    color: #01ACF0;
    text-decoration: none;
    font-size: 13px;
    background-color: #36393F;
    border: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
export { 
  CharacterBackground, 
  LoginFormContainer, 
  LoginContainer, 
  LoginForm, 
  InputGroup, 
  LoginButton,
  ForgotPassButtonWrapper,
  RegisterWrapper,
  ErrMessage,
  MessageField,
  LoginInput,
};