import React from 'react'
import { LoginFormContainer, LoginForm, InputGroup, LoginButton, ForgotPassButtonWrapper, RegisterWrapper, ErrMessage,MessageField, LoginInput } from '../../styles/loginStyles/LoginFormContainer';
import { useDispatch } from 'react-redux';
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux';
import { toggleLoginDisplay } from '../../redux/features/loginFormSlice';
import { toggleRegisterDisplay } from '../../redux/features/registerFormSlice';
import { Link } from 'react-router-dom';

export default function LoginFormComponent() {
  const dispatch = useDispatch();
  const loginForm = useSelector(
    (state: RootState) => state.loginForm.value);
  const [email, setEmail] = React.useState('' as string);
  const [pass, setPass] = React.useState('' as string);
  const [showEmailErr, displayEmailErr] = React.useState(false as boolean); 
  const [showPassErr, displayPassErr] = React.useState(false as boolean);
  const [emailErr, setEmailErr] = React.useState('test' as string);
  const [passErr, setPassErr] = React.useState('test' as string);
  
  const submitLoginForm = (e: React.FormEvent): void => {
  e.preventDefault();
  console.log(e);
  if(checkEmptyLoginFields()) return;
  displayPassErr(false);
  displayEmailErr(false);
  }
  const setLoginDisplay = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleLoginDisplay(false)); 
    dispatch(toggleRegisterDisplay(true));
  }
  
  const checkEmptyLoginFields = (): boolean => {
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
  return (
  <LoginFormContainer>
      <LoginForm onSubmit={submitLoginForm}>
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
              <LoginButton>
                  Login
              </LoginButton>
              <RegisterWrapper>
                  <p>Need an account?</p>
                  <Link to="/register">
                    <button>Register</button>
                  </Link>
                  
              </RegisterWrapper>
      </LoginForm>
  </LoginFormContainer>
  )
}
