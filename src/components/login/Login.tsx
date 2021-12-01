import React from 'react'
import { LoginContainer, CharacterBackground } from '../../styles/loginStyles/LoginContainerStyles';
import { LoginFormContainer, LoginForm, InputGroup, LoginButton, ForgotPassButtonWrapper, RegisterWrapper,ErrMessage,MessageField, LoginInput } from '../../styles/loginStyles/LoginFormContainer';
import { RegisterFormContainer, RegisterForm, RegisterInput, DateOfBirth, DoBInput, DoBWrapper, RegisterButton, TermsOfServiceWrapper, MonthWrapper, DayWrapper, YearWrapper, MonthInput, DayInput, YearInput } from '../../styles/loginStyles/LoginRegisterFormContainer';
import Image from '../../utility/imagesObj'

interface DropUpMenu { 
  month: boolean, 
  day: boolean, 
  year: boolean };
export default function Login() {
  const [email, setEmail] = React.useState('' as string);
  const [pass, setPass] = React.useState('' as string);
  const [showEmailErr, displayEmailErr] = React.useState(false as boolean); 
  const [showPassErr, displayPassErr] = React.useState(false as boolean);
  const [emailErr, setEmailErr] = React.useState('test' as string);
  const [passErr, setPassErr] = React.useState('test' as string);
  const [dropUpMenu, displayDropUpMenu] = React.useState({
    month: false,
    day: false,
    year: false,
  } as DropUpMenu)
  const submitForm = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(e);
    if(checkEmptyFields()) return;
    displayPassErr(false);
    displayEmailErr(false);
  }
  const checkEmptyFields = (): boolean => {
    if(email === '') {
      setErrMsg('emptyEmail');
      displayEmailErr(true);
    }
    if(pass === '') {
      setErrMsg('emptyPass');
      displayPassErr(true);
    }
    return true;
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
  const toggleDropUpMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    const target = e.currentTarget as Element;
    console.log(target.id);
  }
  return (
  <LoginContainer>
    <CharacterBackground src={Image.characterBackground} />
    {/* <LoginFormContainer>
      <LoginForm onSubmit={submitForm}>
        <h2>Welcome back!</h2>
        <h4>We're so excited to see you again!</h4>
        <InputGroup>
          <MessageField err={showEmailErr}>
            <label htmlFor="email">EMAIL OR PHONE NUMBER</label>
            <ErrMessage err={showEmailErr}>
              <span></span>
              {emailErr}
            </ErrMessage>
          </MessageField>
          <LoginInput err={showEmailErr} type="email" name="email" />
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
        <LoginButton>Login</LoginButton>
        <RegisterWrapper>
          <p>Need an account?</p>
          <button>Register</button>
        </RegisterWrapper>
      </LoginForm>
    </LoginFormContainer> */}
    <RegisterFormContainer>
      <RegisterForm>
        <h2>Create an account</h2>
        <InputGroup>
          <MessageField err={showEmailErr}>
            <label htmlFor="email">EMAIL</label>
            <ErrMessage err={showEmailErr}>
              <span></span>
              {emailErr}
            </ErrMessage>
          </MessageField>
          <RegisterInput err={showEmailErr} type="email" name="email" />
        </InputGroup>
        <InputGroup>
          <MessageField err={showEmailErr}>
            <label htmlFor="user">USERNAME</label>
            <ErrMessage err={showEmailErr}>
              <span></span>
              {emailErr}
            </ErrMessage>
          </MessageField>
          <RegisterInput err={showEmailErr} type="text" name="user" />
        </InputGroup>
        <InputGroup>
          <MessageField err={showEmailErr}>
            <label htmlFor="password">PASSWORD</label>
            <ErrMessage err={showEmailErr}>
              <span></span>
              {emailErr}
            </ErrMessage>
          </MessageField>
          <RegisterInput err={showEmailErr} type="password" name="password" />
        </InputGroup>
        <DateOfBirth>
          <label htmlFor="date-of-birth">DATE OF BIRTH</label>
          <DoBWrapper>
            <MonthInput id="month" onClick={toggleDropUpMenu}>
              <span>
                <p>Select</p>
                <img src={Image.chevronBottomIcon} alt="" />
              </span>
              <MonthWrapper display={ dropUpMenu.month }></MonthWrapper>
            </MonthInput>
            <DayInput id="day" onClick={toggleDropUpMenu}>
              <span>
                <p>Select</p>
                <img src={Image.chevronBottomIcon} alt="" />
              </span>
              <DayWrapper display={dropUpMenu.day}></DayWrapper>
            </DayInput>
            <YearInput id="year" onClick={toggleDropUpMenu} >
              <span>
                <p>Select</p>
                <img src={Image.chevronBottomIcon} alt="" />
              </span>
              <YearWrapper display={dropUpMenu.year}></YearWrapper>
            </YearInput>
          </DoBWrapper>
        </DateOfBirth>
        <RegisterButton>Continue</RegisterButton>
        <RegisterWrapper>
          <button>Already have an account?</button>
        </RegisterWrapper>
      </RegisterForm>
      <TermsOfServiceWrapper>
        <p>By registering, you agree to Discord's</p>
        <button>Terms of Service</button>
        <p>and</p>
        <button>Privacy Policy</button>
        <p>.</p>
      </TermsOfServiceWrapper>
    </RegisterFormContainer>
  </LoginContainer>
  )
}
