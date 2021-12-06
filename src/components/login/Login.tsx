import React from 'react'
import { LoginContainer, CharacterBackground } from '../../styles/loginStyles/LoginContainerStyles';
import LoginFormComponent from './LoginFormComponent';
import Image from '../../utility/imagesObj'



export default function Login() {
  return (
  <LoginContainer>
    <CharacterBackground src={Image.characterBackground} />
    <LoginFormComponent />
  </LoginContainer>
  )
}
