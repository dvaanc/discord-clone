import { SearchPanel, SearchPanelItem } from '../../../styles/appStyles/Overlay/OverlayStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store'
import React from 'react'
import Image from '../../../utility/imagesObj';

export default function SearchPanelComponent() {
  const searchPanel = useSelector(
    (state: RootState) => state.searchPanel.value);
  return (
    <SearchPanel display={searchPanel}>
      <div>
        <p>SEARCH OPTIONS</p>
        <img src="" alt="" />
      </div>
      <SearchPanelItem>
        <span>
          <h4>from:</h4>
          <p>user</p>
        </span>
        <img src={Image.addSearchIcon} alt="" />
      </SearchPanelItem>
      <SearchPanelItem>
        <span>
          <h4>mentions:</h4>
          <p>user</p>
        </span>
        <img src={Image.addSearchIcon} alt="" />
      </SearchPanelItem>
      <SearchPanelItem>
        <span>
          <h4>has:</h4>
          <p>link, embed or file</p>
        </span>
        <img src={Image.addSearchIcon} alt="" />
      </SearchPanelItem>
      <SearchPanelItem>
        <span>
          <h4>before:</h4>
          <p>specific date</p>
        </span>
        <img src={Image.addSearchIcon} alt="" />
      </SearchPanelItem>
      <SearchPanelItem>
        <span>
          <h4>during:</h4>
          <p>specific date</p>
        </span>
        <img src={Image.addSearchIcon} alt="" />
      </SearchPanelItem>
      <SearchPanelItem>
        <span>
          <h4>after:</h4>
          <p>specific date</p>
        </span>
        <img src={Image.addSearchIcon} alt="" />
      </SearchPanelItem>
      <SearchPanelItem>
        <span>
          <h4>in:</h4>
          <p>channel</p>
        </span>
        <img src={Image.addSearchIcon} alt="" />
      </SearchPanelItem>
    </SearchPanel>
  )
}
