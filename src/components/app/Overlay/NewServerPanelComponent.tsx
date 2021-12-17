import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store'
import { toggleNewServerPanel } from '../../../redux/features/newServerPanelSlice';
import { NewServerModalContainer, NewServerModalContent, Option, SectionOne, SectionTwo, SectionThree, StartFromATemplate } from '../../../styles/appStyles/Overlay/NewServerStyles';
import Image from '../../../utility/imagesObj';
export default function NewServerCompoennt() {
  const dispatch = useDispatch();
  const newServerPanel = useSelector(
  (state: RootState) => state.newServerPanel.value);
  const createServer = (e: React.SyntheticEvent) => {
    console.log('test')
  }
  const hideNewServerPanel = (e: React.MouseEvent) => {
    e.stopPropagation();
    if((e.target as HTMLDivElement).id === 'newServerModal') return dispatch(toggleNewServerPanel(false));

  }
  return (
    <NewServerModalContainer id="newServerModal" display={newServerPanel} onClick={hideNewServerPanel}>
      <NewServerModalContent>
        <SectionOne>
          <h3>Create a server</h3>
          <span>
            Your server is where you and your friends hangout. Make yours and start talking.
          </span>
          <button>
            <img id="newServerModal" src={Image.closeServerPanelIcon} alt="" onClick={hideNewServerPanel} />
          </button>
        </SectionOne>
        <SectionTwo>
          <Option onClick={createServer}>
            <img src={Image.createMyIcon} alt="" />
            <h4>Create My Own</h4>
            <img src={Image.chevronRightIcon} alt="" />
          </Option>
          <StartFromATemplate>start from a template</StartFromATemplate>
          <Option>
            <img src={Image.createGamingIcon} alt="" />
            <h4>Gaming</h4>
            <img src={Image.chevronRightIcon} alt="" />
          </Option>
          <Option>
            <img src={Image.createSchoolClubIcon} alt="" />
            <h4>School Club</h4>
            <img src={Image.chevronRightIcon} alt="" />
          </Option>
          <Option>
            <img src={Image.createStudyGroupIcon} alt="" />
            <h4>Study Group</h4>
            <img src={Image.chevronRightIcon} alt="" />
          </Option>
          <Option>
            <img src={Image.createFriendsIcon} alt="" />
            <h4>Friends</h4>
            <img src={Image.chevronRightIcon} alt="" />
          </Option>
          <Option>
            <img src={Image.createArtistsAndCreatorsIcon} alt="" />
            <h4>Artists & Creators</h4>
            <img src={Image.chevronRightIcon} alt="" />
          </Option>
        </SectionTwo>
        <SectionThree>
          <h3>Have an invite already?</h3>
          <button>Join a Server</button>
        </SectionThree>
      </NewServerModalContent>
    </NewServerModalContainer>
  )
}
