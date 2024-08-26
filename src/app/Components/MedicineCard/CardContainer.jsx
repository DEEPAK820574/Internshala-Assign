import React from 'react'
import ImageContainer from './ImageContainer';
import DetailContainer from './DetailContainer';

const CardContainer = ({item}) => {
  return (
    <div className="w-[310px] h-[554px]  flex flex-col gap-[10px] rounded-[30px_0px_30px_0px] border-[2px] border-custom-border">
    <ImageContainer item={item}/>
    <DetailContainer item={item}/>
    </div>
  
  )
}

export default CardContainer