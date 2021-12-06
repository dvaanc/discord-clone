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
} from '../../styles/loginStyles/RegisterFormContainer';
import { InputGroup, RegisterWrapper, ErrMessage, MessageField } from '../../styles/loginStyles/LoginFormContainer';
import { DateOfBirthObj } from '../../utility/DateOfBirthObj';
import Image from '../../utility/imagesObj';
import { useDispatch } from 'react-redux';
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux';
import { toggleLoginDisplay } from '../../redux/features/loginFormSlice';
import { toggleRegisterDisplay } from '../../redux/features/registerFormSlice';
import { isTemplateExpression } from 'typescript';


interface DropUpMenuProps { 
  [key: string]: boolean;
};
interface DateOfBirthProps { 
  [key: string]: string;
};
export default function RegisterFormComponent() {
  const dispatch = useDispatch();
  const registerForm = useSelector(
    (state: RootState) => state.registerForm.value);
  const [email, setEmail] = React.useState('' as string);
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
  } as DateOfBirthProps)
  const submitForm = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(e);
    if(checkEmptyFields()) return;
    displayPassErr(false);
    displayEmailErr(false);
  }
  const setDateOfBirthInfo = (e: React.MouseEvent) => {
    const target = e.target as any;
    const id = (target.parentNode as any).id;
    const info = target.id;
    setDoBInfo({...DateOfBirthInfo, [id]: info,  })
  }
  const setRegisterDisplay = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleRegisterDisplay(false));
    dispatch(toggleLoginDisplay(true)); 
  }
  const checkEmptyFields = (): boolean => {
    if(email === '') {
      setErrMsg('emptyEmail');
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

  return (
    <RegisterFormContainer display={registerForm}>
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
              <p>{DateOfBirthInfo.monthVal}</p>
              <img src={Image.chevronBottomIcon} alt="" />
              <MonthWrapper id="monthVal" display={ dropUpMenu.month } onClick={setDateOfBirthInfo}>
                { DateOfBirthObj.month.map((item) => <DropUpItem id={item}>{item}</DropUpItem> )}
              </MonthWrapper>
            </MonthInput>
            <DayInput id="day" onClick={toggleDropUpMenu}>
              <p>{DateOfBirthInfo.dayVal}</p>
              <img src={Image.chevronBottomIcon} alt="" />
              <DayWrapper id="dayVal" display={dropUpMenu.day}>
              { DateOfBirthObj.day.map((item) => <DropUpItem id={item}>{item}</DropUpItem>)}
              </DayWrapper>
            </DayInput>
            <YearInput id="year" onClick={toggleDropUpMenu} >
              <p>{DateOfBirthInfo.yearVal}</p>
              <img src={Image.chevronBottomIcon} alt="" />
              <YearWrapper id="yearVal" display={dropUpMenu.year}>
              { DateOfBirthObj.year.map((item) => <DropUpItem id={item}>{item}</DropUpItem>)}
              </YearWrapper>
            </YearInput>
          </DoBWrapper>
        </DateOfBirth>
        <RegisterButton>Continue</RegisterButton>
        <RegisterWrapper>
          <button onClick={setRegisterDisplay}>Already have an account?</button>
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
