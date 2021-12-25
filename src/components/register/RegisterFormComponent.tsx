import React from 'react'
import {
  RegisterFormContainer, 
  RegisterForm, 
  RegisterInput,
  DateOfBirth, 
  DoBInput, 
  DoBWrapper, 
  RegisterButton, 
  TermsOfServiceWrapper, 
  DropUpItem,
  MonthWrapper,
  DayWrapper, 
  YearWrapper, 
  MonthInput,
  DayInput,
  YearInput,
} from '../../styles/registerStyles/RegisterFormContainer';
import { InputGroup, RegisterWrapper, ErrMessage, MessageField } from '../../styles/loginStyles/LoginFormContainer';
import { DateOfBirthObj } from '../../utility/DateOfBirthObj';
import Image from '../../utility/imagesObj';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebase/firebase';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store'

interface DropUpMenuProps { 
  [key: string]: boolean;
};
interface DateOfBirthProps { 
  [key: string]: string;
};
export default function RegisterFormComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = React.useState("" as string);
  const [registerPassword, setRegisterPasword] = React.useState("" as string);
  const [registerUser, setRegisterUser] = React.useState("" as string);
  const [showEmailErr, displayEmailErr] = React.useState(false as boolean); 
  const [showPassErr, displayPassErr] = React.useState(false as boolean);
  const [emailErr, setEmailErr] = React.useState('test' as string);
  const [passErr, setPassErr] = React.useState('test' as string);
  const [dropUpMenu, displayDropUpMenu] = React.useState({ 
    month: false, 
    day: false, 
    year: false 
  } as DropUpMenuProps);
  const [DateOfBirthInfo, setDoBInfo] = React.useState({
    monthVal: 'Select',
    dayVal: 'Select',
    yearVal: 'Select',
  } as DateOfBirthProps);


  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser !== null) return navigate("/app")
  });



  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
      console.log('Successfully registered')
    } catch (error) {
      if(error instanceof Error) console.log(error.message);
    }
  };

  const submitRegisterForm = (e: React.FormEvent): void => {
    e.preventDefault();
    // if(checkEmptyFields()) return;
    // displayPassErr(false);
    // displayEmailErr(false);
    console.log(registerEmail, registerPassword)
    register();
  }
  const setDateOfBirthInfo = (e: React.MouseEvent) => {
    const target = e.target as any;
    const id = (target.parentNode as any).id;
    const info = target.id;
    setDoBInfo({...DateOfBirthInfo, [id]: info,  })
  }
  const setRegisterDisplay = (e: React.MouseEvent) => {
    e.preventDefault();
  }
  const checkEmptyFields = (): boolean => {
    if(registerEmail === '') {
      // setErrMsg('emptyEmail');
      displayEmailErr(true);
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
    const inputType = target.id;
    dropUpMenu[inputType] ? 
    displayDropUpMenu({...dropUpMenu, [inputType]: false}) : displayDropUpMenu({...dropUpMenu, [inputType]: true});
  }
  const onChangeRegisterEmail = (e: React.ChangeEvent) => setRegisterEmail((e.target as HTMLInputElement).value);
  const onChangeRegisterPassword = (e: React.ChangeEvent) => setRegisterPasword((e.target as HTMLInputElement).value);
  const onChangeRegisterUser = (e: React.ChangeEvent) => setRegisterUser((e.target as HTMLInputElement).value);
  return (
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
          <RegisterInput err={showEmailErr} type="email" name="email" onChange={onChangeRegisterEmail} />
        </InputGroup>
        <InputGroup>
          <MessageField err={showEmailErr}>
            <label htmlFor="user">USERNAME</label>
            <ErrMessage err={showEmailErr}>
              <span></span>
              {emailErr}
            </ErrMessage>
          </MessageField>
          <RegisterInput err={showEmailErr} type="text" name="user" onChange={onChangeRegisterUser} />
        </InputGroup>
        <InputGroup>
          <MessageField err={showEmailErr}>
            <label htmlFor="password">PASSWORD</label>
            <ErrMessage err={showEmailErr}>
              <span></span>
              {emailErr}
            </ErrMessage>
          </MessageField>
          <RegisterInput err={showEmailErr} type="password" name="password" onChange={onChangeRegisterPassword}/>
        </InputGroup>
        <DateOfBirth>
          <label htmlFor="date-of-birth">DATE OF BIRTH</label>
          <DoBWrapper>
            <MonthInput id="month" textColour={DateOfBirthInfo.monthVal} onClick={toggleDropUpMenu}>
              <p>{DateOfBirthInfo.monthVal}</p>
              <img src={Image.chevronBottomIcon} alt="" />
              <MonthWrapper id="monthVal" display={ dropUpMenu.month } onClick={setDateOfBirthInfo}>
                { DateOfBirthObj.month.map((item) => <DropUpItem id={item}>{item}</DropUpItem> )}
              </MonthWrapper>
            </MonthInput>
            <DayInput id="day"  textColour={DateOfBirthInfo.dayVal} onClick={toggleDropUpMenu}>
              <p>{DateOfBirthInfo.dayVal}</p>
              <img src={Image.chevronBottomIcon} alt="" />
              <DayWrapper id="dayVal" display={dropUpMenu.day} onClick={setDateOfBirthInfo}>
              { DateOfBirthObj.day.map((item) => <DropUpItem id={item}>{item}</DropUpItem>)}
              </DayWrapper>
            </DayInput>
            <YearInput id="year" textColour={DateOfBirthInfo.yearVal} onClick={toggleDropUpMenu} >
              <p>{DateOfBirthInfo.yearVal}</p>
              <img src={Image.chevronBottomIcon} alt="" />
              <YearWrapper id="yearVal" display={dropUpMenu.year} onClick={setDateOfBirthInfo}>
              { DateOfBirthObj.year.map((item) => <DropUpItem id={item}>{item}</DropUpItem>)}
              </YearWrapper>
            </YearInput>
          </DoBWrapper>
        </DateOfBirth>
        <RegisterButton onClick={submitRegisterForm}>Continue</RegisterButton>
        <RegisterWrapper>
          <Link to="/login">
            <button>Already have an account?</button>
          </Link>
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
  )
}
