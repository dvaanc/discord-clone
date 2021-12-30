import React, { useState, useEffect } from 'react'
import { toggleNewServerPanel } from '../../../../redux/features/newServerPanelSlice';
import { NewServerModalContainer, NewServerModalContent } from '../../../../styles/appStyles/Overlay/NewServerPanelStyles/NewServerStyles';
import CreateAServerComponent from './CreateAServerComponent';
import TellUsMoreComponent from './TellUsMoreComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { doc, addDoc, setDoc, Timestamp, collection, getFirestore } from 'firebase/firestore/lite';
import { ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../../../firebase/firebase';
import { templates } from '../../../../utility/serverTemplates';
import CustomizeYourServerComponent from './CustomizeYourServerComponent';
import { v4 as uuidv4 } from 'uuid';

export default function NewServerCompoennt() {
  const dispatch = useDispatch();
  const newServerPanel = useSelector(
    (state: RootState) => state.newServerPanel.value);
  const [height, setHeight] = useState('558' as string);
  const [checkImage, setCheckImage] = useState(false as boolean);
  const [server, setServer]  = useState({
    serverName: '',
    serverProfile: null as string | null,
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
        setServer({...server, serverProfile: URL.createObjectURL(img) });
        setCheckImage(true);
        return;
      }
      alert('Please upload image')
      setCheckImage(false);
    }
  }

  const createServerFirebase = async(): Promise<void> => {
    try {
      const newServerRef: any = await addDoc(collection(db, 'servers'), {
        serverName: server.serverName,
        serverProfile: server.serverProfile,
        creationDate: Timestamp.now(),
        serverTemplate: server.serverTemplate,
        serverType: server.serverType,
      })
      createChannelsFirebase(newServerRef.id, server.serverTemplate);

    } catch(error) { if(error instanceof Error) return console.log(error) };
    /* 
    1. addDoc to firestore with a auto generated ID with serverProfile key with an empty string.
    2. then upload image to firebase storage into a folder with the id of doc from step 1.
    3. then update doc from step 1 with a reference to the firebase storage image.
    */
  }
  const createChannelsFirebase = async(docID: string, serverTemplate: string): Promise<void> => {
    try {
      // const categoryRef = await setDoc(doc(db, `servers/${docID}/textChannels/`)
      const noCategoryRef = await setDoc(doc(db, `servers/${docID}/textChannels/`, 'no category'), { 
        categoryID: `${uuidv4()}` 
      });
      for (const item of templates[serverTemplate].textChannels) {
        const categoryRef = await setDoc(doc(db, `servers/${docID}/textChannels/`, item.category), {
          categoryID: `${uuidv4()}`,
        });       
        console.log(item)
        for (const channelItem of item.channels) {
          const textChannelRef = await setDoc(doc(db, `servers/${docID}/textChannels/${item.category}`, `${channelItem}`), {
            messages: [],
            archived: [],
            userPermissions: {},
            channelID: `${uuidv4()}`,
            channelName: '',
          });
        }
      }
      // for (const item of templates[serverTemplate].voiceChannels) {
      //   const categoryRef = await setDoc(doc(db, `servers/${docID}/voiceChannels/`, item.category), {
      //     categoryID: `${uuidv4()}`,
      //   });
      //   console.log(categoryRef);        
      //   for (const channelItem of item.channels) {
      //     const voiceChannelRef = await setDoc(doc(db, `servers/${docID}/voiceChannels/${item.category}`, `${channelItem}`), {
      //       currentUsers: [],
      //       userPermissions: [],
      //       channelID: `${uuidv4()}`,
      //     });
      //   }
      // }


      // const voiceChannelsRef = await addDoc(collection(db, `servers/${docID}/voiceChannels`), {
      //   currentUsers: [],
      //   userPermissions: [],
      //   channelID: `${uuidv4()}`,
      // })
    } catch(error) { if (error instanceof Error) return console.log(error) };
  }

  const uploadServerProfile = async(docID: string): Promise<void> => {
    try {
      const storageRef = ref(storage, `serverAssets/${docID}/serverProfile.png`);
    } catch(error) { if(error instanceof Error) return console.log(error) };
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
        createServerFirebase={createServerFirebase}
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

