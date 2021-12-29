import React, { useState, useEffect } from 'react'
import { SectionOne } from '../../../../styles/appStyles/Overlay/NewServerPanelStyles/CreateAServerStyles'
import { FileUploadInput, SectionTwo, ServerNameInputContainer, ServerNameInput, ServerCreationDisclaimer, SectionThree } from '../../../../styles/appStyles/Overlay/NewServerPanelStyles/CustomizeYourServerStyles'
import Image from '../../../../utility/imagesObj'
interface CustomizeYourServerProps {
  hideNewServerPanel(e: React.MouseEvent): void,
  handleCustomizeServerName(e: React.ChangeEvent): void,
  cycleSlideShowDown(e: React.MouseEvent): void,
  handleCustomizeServerImage(e: React.ChangeEvent): void,
  createServerFirebase(): Promise<void>,
  checkImage: boolean,
  serverName: string,
  serverProfile: string | null,
}
export default function CustomizeYourServerComponent({ 
  hideNewServerPanel, 
  handleCustomizeServerName, 
  cycleSlideShowDown,
  handleCustomizeServerImage,
  createServerFirebase,                                                                                                                                                                   
  serverName,
  serverProfile,
  checkImage,
  }: CustomizeYourServerProps) {
    const [currentImage, setCurrentImage] = useState(Image.uploadImageIcon as string);

    useEffect(() => {
      if(serverProfile === null) return setCurrentImage(Image.uploadImageIcon);
      if(serverProfile !== null) return setCurrentImage(serverProfile);
    }, [serverProfile])
  return (
    <div>
      <SectionOne style={{ padding: '24px 24px 0'}}>
        <h3>Customize your server</h3>
        <span>Give your new server a perosonality with a name and an icon. You can always change it later.</span>
        <button>
          <img id="newServerModal" src={Image.closeServerPanelIcon} alt="" onClick={hideNewServerPanel} />
        </button>
      </SectionOne>
      <SectionTwo checkImage={checkImage}>
        <div>  
          <img src={currentImage} alt=""/>
          <FileUploadInput type="file" accept="image/*" onChange={handleCustomizeServerImage} />
        </div>
        <ServerNameInputContainer>
          <form action="">
            <h5>SERVER NAME</h5>
            <ServerNameInput onChange={handleCustomizeServerName} value={serverName} />
          </form>
          <ServerCreationDisclaimer>
            By creating a server, you agree to Discord's 
            <a target="_" href="https://discord.com/guidelines"> Community Guidelines</a>
          </ServerCreationDisclaimer>
        </ServerNameInputContainer>
      </SectionTwo>
      <SectionThree>
        <button onClick={cycleSlideShowDown}>Back</button>
        <button onClick={createServerFirebase}>Create</button>
      </SectionThree>
    </div>
  )
}
