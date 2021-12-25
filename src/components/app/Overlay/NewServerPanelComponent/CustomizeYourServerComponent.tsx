import React, { useState } from 'react'
import { SectionOne } from '../../../../styles/appStyles/Overlay/NewServerPanelStyles/CreateAServerStyles'
import { FileUploadInput, SectionTwo } from '../../../../styles/appStyles/Overlay/NewServerPanelStyles/CustomizeYourServerStyles'
import Image from '../../../../utility/imagesObj'
export default function CustomizeYourServerComponent() {
  const [currentImage, setImage] = useState(false as any);
  return (
    <div>
      <SectionOne style={{ padding: '24px 24px 0'}}>
        <h3>Customize your server</h3>
        <span>Give your new server a perosonality with a name and an icon. You can always change it later.</span>
      </SectionOne>
      <SectionTwo currentImage={currentImage}>
        <div>
          <span>
            <img src={Image.uploadImageIcon} alt="" />
            <FileUploadInput type="file"/>
          </span>
        </div>
      </SectionTwo>
    </div>
  )
}
