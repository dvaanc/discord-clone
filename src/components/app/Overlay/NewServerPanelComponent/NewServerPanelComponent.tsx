import React, { useState, useEffect } from 'react'
import { toggleNewServerPanel } from '../../../../redux/features/newServerPanelSlice';
import { NewServerModalContainer, NewServerModalContent } from '../../../../styles/appStyles/Overlay/NewServerPanelStyles/NewServerStyles';
import CreateAServerComponent from './CreateAServerComponent';
import TellUsMoreComponent from './TellUsMoreComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../../firebase/firebase';

export default function NewServerCompoennt() {
  const dispatch = useDispatch();
  const newServerPanel = useSelector(
    (state: RootState) => state.newServerPanel.value);
  const [server, setServer]  = useState({
    serverName: '',
    serverProfile: '',
    creationDate: '',
    serverTemplate: '',
    serverType: '',
    channels: {
    },
  })
  const [slideshow, setSlideshow] = useState([true, false, false, false] as any);
  useEffect(() => {

  }, [])
  const renderServerContent = (contentType: number) => {
    switch(contentType) {
      case 0:
        return <CreateAServerComponent />
      case 1:
        return <TellUsMoreComponent />
      case 2:
        break;
      case 3:
        break;
    }
  }
  
  const createServer = async (e: React.SyntheticEvent) => {
    try {
      const res = await setDoc(doc(db, 'servers'), {
        serverName: server.serverName,
        serverProfile: server.serverProfile,
        creationDate: server.creationDate,
        serverTemplate: server.serverTemplate,
        serverType: server.serverType,
        channels: server.channels,
      })
      .then((res) => console.log(res))
    }
    catch(error) { 
      if(error instanceof Error) console.log(error) 
    }
  }
  const hideNewServerPanel = (e: React.MouseEvent) => {
    e.stopPropagation();
    if((e.target as HTMLDivElement).id === 'newServerModal') return dispatch(toggleNewServerPanel(false));
  }


    // 436
    // 558
    // 396
    // 405
  return (
    <NewServerModalContainer id="newServerModal" display={newServerPanel} onClick={hideNewServerPanel}>
      <NewServerModalContent display={newServerPanel} height="558">
      { slideshow.forEach((item: boolean, i: number) => {
        if(item) {
          renderServerContent(i)
        }
      })}

      </NewServerModalContent>
    </NewServerModalContainer>
  )
}
