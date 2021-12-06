import React from 'react'
import RegisterFormComponent from './RegisterFormComponent'
import Image from '../../utility/imagesObj'
import { RegisterContainer, CharacterBackground } from '../../styles/registerStyles/RegisterContainerStyles'
export default function Register() {
  return (
    <RegisterContainer>
      <CharacterBackground src={Image.characterBackground} />
      <RegisterFormComponent />
    </RegisterContainer>
    
  )
}
