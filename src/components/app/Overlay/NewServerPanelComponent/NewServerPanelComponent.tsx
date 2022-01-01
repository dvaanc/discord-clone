import React, { useState, useEffect } from 'react'
import { toggleNewServerPanel } from '../../../../redux/features/newServerPanelSlice';
import { NewServerModalContainer, NewServerModalContent } from '../../../../styles/appStyles/Overlay/NewServerPanelStyles/NewServerStyles';
import CreateAServerComponent from './CreateAServerComponent';
import TellUsMoreComponent from './TellUsMoreComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import CustomizeYourServerComponent from './CustomizeYourServerComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, createServerFirebase } from '../../../../firebase/firebase';

export default function NewServerCompoennt() {
  const dispatch = useDispatch();
  const newServerPanel = useSelector(
    (state: RootState) => state.newServerPanel.value);
  const [height, setHeight] = useState('558' as string);
  const [checkImage, setCheckImage] = useState(false as boolean);
  const [currentUser, setCurrentUser] = useState('' as any);
  const [server, setServer]  = useState({
    serverName: '',
    serverProfile: null as any,
    creationDate: '' as any,
    serverTemplate: '',
    serverType: '',
  })
  const [slideshow, setSlideshow] = useState([true, false, false, false] as Array<boolean>);
  // useEffect(() => {
  //   console.log(server)

  // }, [server])
  // useEffect(() => {
  //   if(server.serverProfile!== null) {
  //     fetch(server.serverProfile)
  //       .then((res) => res.blob())
  //       .then((blob) => console.log(blob.type));
  //   }
  // }, [server.serverProfile])

  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser) return setCurrentUser(currentUser.uid);
  })
  // useEffect(() => {
  //   console.log(currentUser)
  // }, [currentUser])
  useEffect(() => {
    if(slideshow[0]) setHeight('558');
    if(slideshow[1]) setHeight('396');
    if(slideshow[2]) setHeight('405');
    if(slideshow[3]) setHeight('436');
  }, [slideshow])

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

  const handleCreateAServer = (e: React.MouseEvent): void => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    const templateName = target.id;
    setServer
    ({...server, 
      serverTemplate: target.id,
    });
    cycleSlideShowUp();
  }

  const handleServerType = (e: React.MouseEvent): void => {
    const target = e.target as HTMLElement
    setServer({...server, serverType: target.id});
    cycleSlideShowUp();
  }

  const handleCustomizeServerName = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    setServer({...server, serverName: target.value})
  }

  const handleCustomizeServerImage = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const img = target.files[0];
      if(img && img['type'].split('/')[0] === 'image') {
        setServer({...server, serverProfile: img });
        setCheckImage(true);
        return;
      }
      alert('Please upload image')
      setCheckImage(false);
    }
  }

  const submitNewServer = (e: React.MouseEvent): any => {
    createServerFirebase(server, currentUser);
  }

  const hideNewServerPanel = (e: React.MouseEvent) => {
    e.stopPropagation();
    if((e.target as HTMLDivElement).id === 'newServerModal') {
      dispatch(toggleNewServerPanel(false));
      setTimeout(() => {
        resetSlideshow();
        resetServerData();
      }, 300)
    }
  }

  const resetSlideshow = (): void => {
    slideshow.forEach((item) => item = false);
    slideshow[0] = true;
    setHeight('558');
    setSlideshow(slideshow);
  }

  const resetServerData = () => {
    setCheckImage(false);
    setServer({
      serverName: '',
      serverProfile: null,
      creationDate: '',
      serverTemplate: '',
      serverType: '',
    })
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
          handleServerType={handleServerType}
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
        submitNewServer={submitNewServer}
        />
        );
    } 
    // if(slideshow[3]) {
    //   return ( <CreateAServerComponent />);
    // } 
  }
    // 436
    // 558
    // 396
    // 405
  return (
    <NewServerModalContainer id="newServerModal" display={newServerPanel} onClick={hideNewServerPanel}>
      <NewServerModalContent display={newServerPanel} height={height}>
        { renderServerContent() }
      </NewServerModalContent>
    </NewServerModalContainer>
  )
}

