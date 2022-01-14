import React, { useState, useEffect } from 'react'
import { 
  LoginFormContainer,
  LoginForm,
  InputGroup,
  LoginButton,
  ForgotPassButtonWrapper,
  RegisterWrapper,
  ErrMessage,
  MessageField,
  LoginInput, 
  DemoWrapper
} from '../../styles/loginStyles/LoginFormContainer';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { signInWithEmailAndPassword } from '@firebase/auth';

import { useDispatch, useSelector } from 'react-redux';

export default function LoginFormComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("" as string);
  const [loginPassword, setLoginPassword] = useState("" as string);
  const [showEmailErr, displayEmailErr] = useState(false as boolean); 
  const [showPassErr, displayPassErr] = useState(false as boolean);
  const [emailErr, setEmailErr] = useState('test' as string);
  const [passErr, setPassErr] = useState('test' as string);
  const [signInWithDemo, setSignInWithDemo] = useState(false as boolean);

  useEffect(() => {
    const mounted = true;
    if(mounted && signInWithDemo) login(loginEmail, loginPassword)
  }, [signInWithDemo])

  const submitLoginForm = (e: React.FormEvent): void => {
  e.preventDefault();
  displayEmailErr(false);
  displayPassErr(false);
  login(loginEmail, loginPassword);
  }

  const login = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/app");
    } catch (error) {
      if(error instanceof Error) {
        console.log(error);
        console.log(error.message);
        setErrMsg(error.message);
      } 
    }
  };

  const loginAsDemo = async (e: React.MouseEvent): Promise<void> => {
    setLoginEmail('test@gmail.com');
    setLoginPassword('123456');
    setSignInWithDemo(true);
  }
  
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
      <DemoWrapper>
        <p>Just looking around? Skip to the demo version</p>
        <button onClick={loginAsDemo}>here.</button>
      </DemoWrapper>
    </LoginForm>
  </LoginFormContainer>
  )
}
