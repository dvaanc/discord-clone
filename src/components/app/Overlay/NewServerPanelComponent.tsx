import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store'
import { NewServerModalContainer, NewServerModalContent, Option, SectionOne, SectionTwo, SectionThree } from '../../../styles/appStyles/Overlay/NewServerStyles';
import Image from '../../../utility/imagesObj';
export default function NewServerCompoennt() {
  const newServerPanel = useSelector(
  (state: RootState) => state.newServerPanel.value);
  return (
    <NewServerModalContainer display={newServerPanel}>
      <NewServerModalContent>
        <SectionOne>
          <h3>Create a server</h3>
          <span>
            Your server is where you and your friends hangout. Make yours and start talking.
          </span>
          <button>
            <img src={Image.closeIcon} alt="" />
          </button>
        </SectionOne>
        <SectionTwo>
          <Option>
            <img src={Image.createMyIcon} alt="" />
            <h4>Create My Own</h4>
            <img src={Image.chevronRightIcon} alt="" />
          </Option>
        </SectionTwo>
        <SectionThree>

        </SectionThree>
      </NewServerModalContent>
    </NewServerModalContainer>
  )
}
