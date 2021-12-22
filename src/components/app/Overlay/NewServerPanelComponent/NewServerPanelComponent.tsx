import React, { useState, useEffect, ReactComponentElement } from 'react'
import { toggleNewServerPanel } from '../../../../redux/features/newServerPanelSlice';
import { NewServerModalContainer, NewServerModalContent } from '../../../../styles/appStyles/Overlay/NewServerPanelStyles/NewServerStyles';
import CreateAServerComponent from './CreateAServerComponent';
import TellUsMoreComponent from './TellUsMoreComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { doc, setDoc, serverTimestamp, arrayUnion } from 'firebase/firestore';
import { db } from '../../../../firebase/firebase';

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
  // useEffect(() => {
  //   const isMounted = true;
  //   if(isMounted) {
  //     if(!newServerPanel) {
  //       return resetCreateServer();
  //     };
  //   }
  // }, [newServerPanel])
  const handleCreateAServer = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    console.log(target.id)
    setServer({...server, serverType: target.id});
    cycleSlideShowUp();
    setHeight('396')
  }
  const resetSlideshow = (): void => {
    const resetArr: Array<boolean> = [];
    slideshow.forEach((item: boolean) => {
      if(slideshow.indexOf(item) === 0) return resetArr.push(item);
      resetArr.push(item = false)
    })
    setSlideshow([...resetArr]);
  }
  const cycleSlideShowUp = (): void => {
    const index = slideshow.findIndex((item: boolean) => item === true )
    setSlideshow([...slideshow, slideshow[index] = false, slideshow[index + 1] = true])
  }
  const cycleSlideShowDown = (): void => {
    const index = slideshow.findIndex((item: boolean) => item === true )
    setSlideshow([...slideshow, slideshow[index] = false, slideshow[index + -1] = true])
  }
  const renderServerContent = () => {
    if(slideshow[0]) {
      return ( <CreateAServerComponent handleCreateAServer={handleCreateAServer} /> );
    } 
    if(slideshow[1]) {
      return ( <TellUsMoreComponent />);
    } 
    // if(slideshow[2]) {
    //   return ( <CreateAServerComponent />);
    // } 
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
      setHeight('558');
      resetSlideshow();
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
