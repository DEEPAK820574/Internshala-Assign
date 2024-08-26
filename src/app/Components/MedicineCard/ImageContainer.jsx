import React from 'react'
import ImageButton from '../Ui/buttons/ImageButton'
import BlueImageButton from '../Ui/buttons/BlueImageButton'
import Image from 'next/image';
import medicineImage from '/public/assets/image.png'


const ImageContainer = ({item}) => {
  return (
    <div className='flex flex-col gap-[12px] '>
      <div className='w-[310px] h-[41px] p-[20px_20px_0_20px]  flex justify-between'>
     { item.visible?<ImageButton/>:<BlueImageButton/> }
      </div>
      <div className='w-auto h-[150px] '>
      <Image
        src={medicineImage}
        alt="Description of the image"
        width={310}
        height={150}
        priority
 />
      </div>
    </div>
  )
}

export default ImageContainer