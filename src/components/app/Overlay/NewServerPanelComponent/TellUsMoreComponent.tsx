import React from 'react'
import { SectionOne, Option } from '../../../../styles/appStyles/Overlay/NewServerPanelStyles/CreateAServerStyles';
import { TellUsMoreOptions, SkipQuestion, TellUsMoreSectionThree } from '../../../../styles/appStyles/Overlay/NewServerPanelStyles/TellUsMoreStyles';
import Image from '../../../../utility/imagesObj';
import { useDispatch } from 'react-redux';
import { toggleNewServerPanel } from '../../../../redux/features/newServerPanelSlice';

export default function TellUsMoreComponent() {
  const dispatch = useDispatch();
    const hideNewServerPanel = (e: React.MouseEvent) => {
      e.stopPropagation();
      if((e.target as HTMLDivElement).id === 'newServerModal') return dispatch(toggleNewServerPanel(false));
    }
  return (
    <div>
      <SectionOne>
        <h3>Tell us more about your server</h3>
        <span>In order to help you with your setup, is your new server for just a few friends or a larger community</span>
        <button>
          <img id="newServerModal" src={Image.closeServerPanelIcon} alt="" onClick={hideNewServerPanel} />
        </button>
      </SectionOne>
      <TellUsMoreOptions>
        <Option>
          <img src={Image.createArtistsAndCreatorsIcon} alt="" />
          <h4>For a club or community</h4>
          <img src={Image.chevronRightIcon} alt="" />
        </Option>
        <Option>
          <img src={Image.createLocalCommunityIcon} alt="" />
          <h4>For me and my friends</h4>
          <img src={Image.chevronRightIcon} alt="" />
        </Option>
        <SkipQuestion>
          Not sure? You can <a href="/">skip this question</a> for now.
        </SkipQuestion>
      </TellUsMoreOptions>
      <TellUsMoreSectionThree>
        <button>Back</button>
      </TellUsMoreSectionThree>
    </div>
  )
}
