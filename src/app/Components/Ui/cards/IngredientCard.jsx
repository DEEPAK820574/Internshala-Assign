import React from 'react'

const IngredientCard = ({item}) => {
  return (
    <div className='w-[262px] h-[48px] gap-2 flex flex-col'>
        <div className='flex  justify-between w-[262px] h-[20px] gap-2 text-[16px] font-normal leading-[20.16px] text-[#365758] '>
            <p>Kultivar</p>
            <p className='w-[112px]  border-b-[1px] relative -top-1 border-bottom-dashed-short' style={{borderColor:"rgba(98, 195, 198, 0.3)"}}></p>
            <p>{item.flavour}</p>
        </div>
        <div className='flex w-[262px] justify-between h-[20px] gap-2 text-[16px] font-normal leading-[20.16px] text-[#365758] '>
            <p>Genetik</p>
            <p className='w-[128px]  border-b-[1px] relative -top-1 border-bottom-dashed-short' style={{borderColor:"rgba(98, 195, 198, 0.3)"}}></p>
            <p>Hybrid</p>
        </div>
    </div>
  )
}

export default IngredientCard