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
  height: 400px;
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
  & label {
    color: #B9BBBE;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  & input[type="text"] {
    padding-left: 10px;
    height: 42px;
    border: none;
    border-radius: 4px;
    background-color: #E8F0FE;
    font-size: 16px;
    font-weight: none;
    &:focus {
      outline: none;
    }
  }
`
const InputGroupTwo = styled(InputGroup)`
  & button {
    color: #00AFF4;
    margin-top: 8px;
    text-decoration: none;
    font-size: 14px;
    background-color: #36393F;
    border: none;
    width: auto;
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
`
export { CharacterBackground, LoginFormContainer, LoginContainer, LoginForm, InputGroup, InputGroupTwo, LoginButton };