import React from 'react'
import Image from '../../../../utility/imagesObj';
import { useDispatch } from 'react-redux';
import { toggleNewServerPanel } from '../../../../redux/features/newServerPanelSlice';
import { Option, SectionOne, SectionTwo, SectionThree, StartFromATemplate,} from '../../../../styles/appStyles/Overlay/NewServerPanelStyles/CreateAServerStyles';
interface CreateAServerProps {
  handleCreateAServer(e: React.MouseEvent): void,
}
export default function CreateAServerComponent({ handleCreateAServer }: CreateAServerProps) {
  const dispatch = useDispatch();
  const hideNewServerPanel = (e: React.MouseEvent) => {
    e.stopPropagation();
    if((e.target as HTMLDivElement).id === 'newServerModal') return dispatch(toggleNewServerPanel(false));
  }
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleCreateAServer(e);
  }
  return (
    <div>
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
        <Option id="createMyOwn" onClick={handleCreateAServer}>
          <img src={Image.createMyIcon} alt="" />
          <h4>Create My Own</h4>
          <img src={Image.chevronRightIcon} alt="" />
        </Option>
        <StartFromATemplate>start from a template</StartFromATemplate>
        <Option id="createGaming" onClick={handleCreateAServer}>
          <img src={Image.createGamingIcon} alt="" />
          <h4>Gaming</h4>
          <img src={Image.chevronRightIcon} alt="" />
        </Option>
        <Option id="createSchoolClub" onClick={handleCreateAServer}>
          <img src={Image.createSchoolClubIcon} alt="" />
          <h4>School Club</h4>
          <img src={Image.chevronRightIcon} alt="" />
        </Option>
        <Option id="createStudyGroup" onClick={handleCreateAServer}>
          <img src={Image.createStudyGroupIcon} alt="" />
          <h4>Study Group</h4>
          <img src={Image.chevronRightIcon} alt="" />
        </Option>
        <Option id="createFriends" onClick={handleCreateAServer}>
          <img src={Image.createFriendsIcon} alt="" />
          <h4>Friends</h4>
          <img src={Image.chevronRightIcon} alt="" />
        </Option>
        <Option id="creatArtists&Creators" onClick={handleCreateAServer}>
          <img src={Image.createArtistsAndCreatorsIcon} alt="" />
          <h4>Artists & Creators</h4>
          <img src={Image.chevronRightIcon} alt="" />
        </Option>
      </SectionTwo>
      <SectionThree>
        <h3>Have an invite already?</h3>
        <button>Join a Server</button>
      </SectionThree>
    </div>
  )
}