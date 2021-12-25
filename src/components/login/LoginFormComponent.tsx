import React from 'react'
import { 
  LoginFormContainer,
  LoginForm,
  InputGroup,
  LoginButton,
  ForgotPassButtonWrapper,
  RegisterWrapper,
  ErrMessage,
  MessageField,
  LoginInput 
} from '../../styles/loginStyles/LoginFormContainer';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store'

export default function LoginFormComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = React.useState("" as string);
  const [loginPassword, setLoginPassword] = React.useState("" as string);
  const [showEmailErr, displayEmailErr] = React.useState(false as boolean); 
  const [showPassErr, displayPassErr] = React.useState(false as boolean);
  const [emailErr, setEmailErr] = React.useState('test' as string);
  const [passErr, setPassErr] = React.useState('test' as string);


  const submitLoginForm = (e: React.FormEvent): void => {
  e.preventDefault();
  displayEmailErr(false);
  displayPassErr(false);
  // if(checkEmptyLoginFields()) return;
  login();
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/app");
      console.log(user);
      console.log('Successfully logged in')
    } catch (error) {
      if(error instanceof Error) {
        console.log(error);
        console.log(error.message);
        setErrMsg(error.message);
      } 
    }
  };
  // const setLoginDisplay = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   dispatch(toggleLoginDisplay(false)); 
  //   dispatch(toggleRegisterDisplay(true));
  // }
  
  const checkEmptyLoginFields = (): boolean => {
    if(loginEmail === '') setErrMsg('emptyEmail');
    if(loginPassword === '') setErrMsg('emptyPass');
    return true;
  }
  const setErrMsg = (str: string) => {
    switch(str) {
      case 'Firebase: Error (auth/invalid-email).':
        setEmailErr('Invalid/Wrong Email');
        displayEmailErr(true);
        break;
      case 'Firebase: Error (auth/user-not-found).':
        setEmailErr('Invalid/Wrong Email.');
        displayEmailErr(true);
        break;
      case 'Firebase: Error (auth/wrong-password).':
        setPassErr('Invalid/Wrong Password.');
        displayPassErr(true);
        break;
      case 'Firebase: Error (auth/user-disabled).':
        setPassErr('User account disabled.');
        setEmailErr('User account disabled.');
        break;
      case 'emptyEmail':
        setEmailErr('This field is required');
        displayEmailErr(true);
        break;
      case 'emptyPass':
        setPassErr('This field is required');
        displayPassErr(true);
        break;
      case 'invalidFields':
        setEmailErr('Login or password is invalid.');
        setPassErr('Login or password is invalid.');
        break;
    }
  }
  const onChangeLoginEmail = (e: React.ChangeEvent) => setLoginEmail((e.target as HTMLInputElement).value);
  const onChangeLoginPassword = (e: React.ChangeEvent) => setLoginPassword((e.target as HTMLInputElement).value);

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
              <LoginInput err={showEmailErr} type="text" name="email" onChange={onChangeLoginEmail} value={loginEmail} />
          </InputGroup>
          <InputGroup>
              <MessageField err={showPassErr}>
              <label htmlFor="pass">PASSWORD</label>
              <ErrMessage err={showPassErr}>
                  <span></span>
                  {passErr}
              </ErrMessage>
              </MessageField>
          <LoginInput err={showPassErr} type="password" name="pass" onChange={onChangeLoginPassword} value={loginPassword}/>
          </InputGroup>
              <ForgotPassButtonWrapper>
                  <button>Forgot your password?</button>
              </ForgotPassButtonWrapper>
              <LoginButton type="submit" onSubmit={submitLoginForm}>Login</LoginButton>
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
