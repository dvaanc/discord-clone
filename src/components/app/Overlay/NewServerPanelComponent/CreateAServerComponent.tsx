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
    const target = e.target as HTMLElement;
    console.log(target.id)
    // handleCreateAServer(e);
  }
  return (
    <div>
      <SectionOne>
        <h3>Create a server</h3>
        <span>Your server is where you and your friends hangout. Make yours and start talking.</span>
        <button>
          <img id="newServerModal" src={Image.closeServerPanelIcon} alt="" onClick={hideNewServerPanel} />
        </button>
      </SectionOne>
      <SectionTwo>
        <Option id="createMyOwn" onClick={handleCreateAServer}>
          <img id="createMyOwn" src={Image.createMyIcon} alt="" />
          <h4 id="createMyOwn">Create My Own</h4>
          <img id="createMyOwn" src={Image.chevronRightIcon} alt="" />
        </Option>
        <StartFromATemplate>start from a template</StartFromATemplate>
        <Option id="createGaming" onClick={handleCreateAServer}>
          <img id="createGaming" src={Image.createGamingIcon} alt="" />
          <h4 id="createGaming">Gaming</h4>
          <img id="createGaming" src={Image.chevronRightIcon} alt="" />
        </Option>
        <Option id="createSchoolClub" onClick={handleCreateAServer}>
          <img id="createSchoolClub" src={Image.createSchoolClubIcon} alt="" />
          <h4 id="createSchoolClub">School Club</h4>
          <img id="createSchoolClub" src={Image.chevronRightIcon} alt="" />
        </Option>
        <Option id="createStudyGroup" onClick={handleCreateAServer}>
          <img id="createStudyGroup" src={Image.createStudyGroupIcon} alt="" />
          <h4 id="createStudyGroup">Study Group</h4>
          <img id="createStudyGroup" src={Image.chevronRightIcon} alt="" />
        </Option>
        <Option id="createFriends" onClick={handleCreateAServer}>
          <img id="createFriends" src={Image.createFriendsIcon} alt="" />
          <h4 id="createFriends">Friends</h4>
          <img id="createFriends" src={Image.chevronRightIcon} alt="" />
        </Option>
        <Option id="creatArtistsAndCreators" onClick={handleCreateAServer}>
          <img id="creatArtistsAndCreators" src={Image.createArtistsAndCreatorsIcon} alt="" />
          <h4 id="creatArtistsAndCreators">Artists & Creators</h4>
          <img id="creatArtistsAndCreators" src={Image.chevronRightIcon} alt="" />
        </Option>
      </SectionTwo>
      <SectionThree>
        <h3>Have an invite already?</h3>
        <button>Join a Server</button>
      </SectionThree>
    </div>
  )
}
