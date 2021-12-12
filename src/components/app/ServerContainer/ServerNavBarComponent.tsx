import Image from '../../../utility/imagesObj';
import { useDispatch } from 'react-redux';
import { toggleSearchPanel } from '../../../redux/features/searchPanelSlice';
import { ServerNavBar, ServerNavFlexStartContainer, ServerNavFlexEndContainer, SearchInput } from '../../../styles/appStyles/ServerContainer/ServerNavBarStyles'
export default function ServerNavBarComponent() {
  const dispatch = useDispatch();
  const onFocus = () => dispatch(toggleSearchPanel(true));
  const onBlur = () => dispatch(toggleSearchPanel(false));
  return (
    <ServerNavBar>
      <ServerNavFlexStartContainer>
        <span>
          <img src={Image.channelHashIcon} alt="" />
        </span>
        <h4>general</h4>
      </ServerNavFlexStartContainer>
      <ServerNavFlexEndContainer>
        <img src={Image.threadIcon} alt="" />
        <img src={Image.bellIcon} alt="" />
        <img src={Image.pinIcon} alt="" />
        <img src={Image.memberListIcon} alt="" />
        <SearchInput>
          <input type="text" onFocus={onFocus} onBlur={onBlur} placeholder="Search" />
          <img src={Image.magnifyingGlassIcon} alt="" />
        </SearchInput>
        <img src={Image.inboxIcon} alt="" />
        <img src={Image.helpIcon} alt="" />
      </ServerNavFlexEndContainer>
    </ServerNavBar>
  )
}
