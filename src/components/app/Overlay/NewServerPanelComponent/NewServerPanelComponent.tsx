import React, { useState, useEffect, ReactComponentElement } from 'react'
import { toggleNewServerPanel } from '../../../../redux/features/newServerPanelSlice';
import { NewServerModalContainer, NewServerModalContent } from '../../../../styles/appStyles/Overlay/NewServerPanelStyles/NewServerStyles';
import CreateAServerComponent from './CreateAServerComponent';
import TellUsMoreComponent from './TellUsMoreComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../../firebase/firebase';
import CustomizeYourServerComponent from './CustomizeYourServerComponent';

export default function NewServerCompoennt() {
  const dispatch = useDispatch();
  const newServerPanel = useSelector(
    (state: RootState) => state.newServerPanel.value);
  const [height, setHeight] = useState('558' as string);
  const [server, setServer]  = useState({
    serverName: '',
    serverProfile: '',
    creationDate: '',
    serverTemplate: '',
    serverType: '',
    channels: {
    },
  })

  const [slideshow, setSlideshow] = useState([true, false, false, false] as Array<boolean>);
  useEffect(() => {
    if(slideshow[0]) setHeight('558');
    if(slideshow[1]) setHeight('396');
    if(slideshow[2]) setHeight('405');
    if(slideshow[3]) setHeight('436');
  }, [slideshow])

  const handleCreateAServer = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    console.log(target.id)
    setServer({...server, serverType: target.id});
    cycleSlideShowUp();
  }
  const resetSlideshow = (): void => {
    const resetArr: Array<boolean> = [...slideshow];
    resetArr.map((item: boolean) => item = false);
    resetArr[0] = true;
    setSlideshow(resetArr);
  }
  const cycleSlideShowUp = (): void => {
    const arr: Array<boolean> = [...slideshow];
    const index = arr.findIndex((item: boolean) => item === true )
    arr[index] = false;
    arr[index + 1] = true;
    setSlideshow(arr);
  }
  const cycleSlideShowDown = (): void => {
    const arr: Array<boolean> = [...slideshow];
    const index = arr.findIndex((item: boolean) => item === true )
    arr[index] = false;
    arr[index - 1] = true;
    setSlideshow(arr);
  }
  const renderServerContent = () => {
    if(slideshow[0]) {
      return ( <CreateAServerComponent handleCreateAServer={handleCreateAServer} /> );
    } 
    if(slideshow[1]) {
      return ( 
        <TellUsMoreComponent 
          cycleSlideShowUp={cycleSlideShowUp} 
          cycleSlideShowDown={cycleSlideShowDown}
          hideNewServerPanel={hideNewServerPanel}
        />
      );
    } 
    if(slideshow[2]) {
      return ( <CustomizeYourServerComponent />);
    } 
    // if(slideshow[3]) {
    //   return ( <CreateAServerComponent />);
    // } 
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
    if((e.target as HTMLDivElement).id === 'newServerModal') {
      dispatch(toggleNewServerPanel(false));
      setTimeout(() => {
        resetSlideshow();
      }, 300)
    }
  }


    // 436
    // 558
    // 396
    // 405
  return (
    <NewServerModalContainer id="newServerModal" display={newServerPanel} onClick={hideNewServerPanel}>
      <NewServerModalContent display={newServerPanel} height={height}>
        { renderServerContent() }
        {/* <CreateAServerComponent /> */}
        {/* <TellUsMoreComponent /> */}

      </NewServerModalContent>
    </NewServerModalContainer>
  )
}
  function cycleSlideShowUp() {
    throw new Error('Function not implemented.');
  }

