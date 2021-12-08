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
import { setCurrentUser } from '../../redux/features/currentUserSlice';
import { useDispatch } from 'react-redux';

export default function LoginFormComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = React.useState("" as string);
  const [loginPassword, setLoginPassword] = React.useState("" as string);
  const [showEmailErr, displayEmailErr] = React.useState(false as boolean); 
  const [showPassErr, displayPassErr] = React.useState(false as boolean);
  const [emailErr, setEmailErr] = React.useState('test' as string);
  const [passErr, setPassErr] = React.useState('test' as string);

  onAuthStateChanged(auth, (currentUser) => {
    console.log(currentUser);
  });

  const submitLoginForm = (e: React.FormEvent): void => {
  e.preventDefault();
  console.log(loginEmail, loginPassword);
  // if(checkEmptyLoginFields()) return;
  // displayPassErr(false);
  // displayEmailErr(false);
  login();
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      dispatch(setCurrentUser(user));
      navigate("/app");
      console.log(user);
    } catch (error) {
      if(error instanceof Error) console.log(error.message);
    }
  };
  // const setLoginDisplay = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   dispatch(toggleLoginDisplay(false)); 
  //   dispatch(toggleRegisterDisplay(true));
  // }
  
  const checkEmptyLoginFields = (): boolean => {
      if(loginEmail === '') {
      setErrMsg('emptyEmail');
      displayEmailErr(true);
      }
      if(loginPassword === '') {
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
              <LoginInput err={showEmailErr} type="email" name="email" onChange={onChangeLoginEmail} />
          </InputGroup>
          <InputGroup>
              <MessageField err={showPassErr}>
              <label htmlFor="pass">PASSWORD</label>
              <ErrMessage err={showPassErr}>
                  <span></span>
                  {passErr}
              </ErrMessage>
              </MessageField>
          <LoginInput err={showPassErr} type="password" name="pass" onChange={onChangeLoginPassword} />
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
