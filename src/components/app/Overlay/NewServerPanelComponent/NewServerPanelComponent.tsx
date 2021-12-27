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
  const [checkImage, setCheckImage] = useState(false as boolean);
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
    console.log(server.serverProfile);

  }, [server])
  useEffect(() => {
    if(slideshow[0]) setHeight('558');
    if(slideshow[1]) setHeight('396');
    if(slideshow[2]) setHeight('405');
    if(slideshow[3]) setHeight('436');
  }, [slideshow])

  const handleCustomizeServerName = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
    setServer({...server, serverName: target.value})
  }
  const handleCustomizeServerImage = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
      const img = target.files[0];
      console.log(img);
      if(img && img['type'].split('/')[0] === 'image') {
        setServer({...server, serverProfile: URL.createObjectURL(img) });
        setCheckImage(true);
        return;
      }
      alert('Please upload image')
      setCheckImage(false);
    }
  }
  const handleServerType = (e: React.MouseEvent): void => {
    const target = e.target as HTMLElement
    console.log(target.id);
    setServer({...server, serverType: target.id});
  }
  const handleCreateAServer = (e: React.MouseEvent): void => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    console.log(target.id)
    setServer({...server, serverTemplate: target.id});
    cycleSlideShowUp();
  }
  const resetSlideshow = (): void => {
    // const resetArr: Array<boolean> = [...slideshow];
    // resetArr.map((item: boolean) => item = false);
    // resetArr[0] = true;
    slideshow.forEach((item) => item = false);
    slideshow[0] = true;
    setHeight('558');
    setSlideshow(slideshow);
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
      return ( 
      <CustomizeYourServerComponent 
        hideNewServerPanel={hideNewServerPanel}
        handleCustomizeServerName={handleCustomizeServerName}
        cycleSlideShowDown={cycleSlideShowDown}
        handleCustomizeServerImage={handleCustomizeServerImage}
        checkImage={checkImage}
        serverName={server.serverName}
        serverProfile={server.serverProfile}
        />
        );
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

