import React from 'react'
import { 
  LoginContainer, 
  CharacterBackground, 
  LoginFormContainer, 
  LoginForm, 
  InputGroup, 
  LoginButton, 
  ForgotPassButtonWrapper, 
  RegisterWrapper,
  ErrMessage,
  MessageField,
  LoginInput
} from '../../styles/loginStyles/LoginStyles'
import Image from '../../utility/imagesObj'
export default function Login() {
  const [email, setEmail] = React.useState('' as string);
  const [pass, setPass] = React.useState('' as string);
  const [showEmailErr, displayEmailErr] = React.useState(false as boolean); 
  const [showPassErr, displayPassErr] = React.useState(false as boolean);
  const [emailErr, setEmailErr] = React.useState('test' as string);
  const [passErr, setPassErr] = React.useState('test' as string);
  const submitForm = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(e);
    if(checkEmptyFields()) return;
  }
  const checkEmptyFields = (): boolean => {
    if(email === '') setErrMsg('emptyEmail');
    if(pass === '') setErrMsg('emptyPass');
    if(email || pass === '') return true;
    return false;
  }
  const setErrMsg = (str: string) => {
    switch(str) {
      case 'emptyEmail':
        setEmailErr('This field is required');
        break;
      case 'emptyPass':
        setPassErr('This field is required');
        break;
      case 'invalidFields':
        setEmailErr('Login or password is invalid.');
        setPassErr('Login or password is invalid.');
    }
  }
  return (
  <LoginContainer>
    <CharacterBackground src={Image.characterBackground} />
    <LoginFormContainer>
      <LoginForm onSubmit={submitForm}>
        <h2>Welcome back!</h2>
        <h4>We're so excited to see you again!</h4>
        <InputGroup>
          <MessageField err={showEmailErr}>
            <label htmlFor="user">EMAIL OR PHONE NUMBER</label>
            <ErrMessage err={showEmailErr}>
              <span></span>
              {emailErr}
            </ErrMessage>
          </MessageField>
          <LoginInput err={showEmailErr} type="email" name="user" />
        </InputGroup>
          <InputGroup>
            <MessageField err={showPassErr}>
              <label htmlFor="pass">PASSWORD</label>
              <ErrMessage err={showPassErr}>
                <span></span>
                {passErr}
              </ErrMessage>
            </MessageField>
          <LoginInput err={showPassErr} type="password" name="pass" />
        </InputGroup>
        <ForgotPassButtonWrapper>
          <button>Forgot your password?</button>
          </ForgotPassButtonWrapper>
        <LoginButton> Login</LoginButton>
        <RegisterWrapper>
          <p>Need an account?</p>
          <button>Register</button>
        </RegisterWrapper>
      </LoginForm>
    </LoginFormContainer>
  </LoginContainer>
  )
}
