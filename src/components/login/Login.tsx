import React from 'react'
import { LoginContainer, CharacterBackground, LoginFormContainer, LoginForm, InputGroup, InputGroupTwo, LoginButton } from '../../styles/loginStyles/LoginStyles'
import Image from '../../utility/imagesObj'
export default function Login() {
  return (
  <LoginContainer>
    <CharacterBackground src={Image.characterBackground} />
    <LoginFormContainer>
      <LoginForm>
        <h2>Welcome back!</h2>
        <h4>We're so excited to see you again!</h4>
        <InputGroup>
          <label htmlFor="user">EMAIL OR PHONE NUMBER</label>
          <input type="text" name="user"/>
        </InputGroup>
        <InputGroupTwo>
          <label htmlFor="user">PASSWORD</label>
          <input type="text" name="user"/>
          <button>Forgot your password?</button>
        </InputGroupTwo>
        <LoginButton>Login</LoginButton>
        <div>
          <p>Need an account?</p>
          <button>Register</button>
        </div>
      </LoginForm>
    </LoginFormContainer>
  </LoginContainer>
  )
}
