import React from 'react'
import MedicialBuyButton from '../buttons/MedicialBuyButton'

const PriceCard = () => {
  return (
    <div class="w-[262px] h-[47px] flex justify-between">
  <div class="w-[91px] h-[47px] gap-[2px] flex flex-col ">
    <div class="w-[91px] h-[30px] gap-[4px]  flex ">
     <p className='text-[24px] font-extrabold leading-[30.24px] tracking-[0.01em] text-[#62C3C6]'>€</p>
     <p className='text-[24px] font-extrabold leading-[30.24px] tracking-[0.01em] text-[#116A6C] flex'>11,66 <span className=' w-[5px] h-[24] text-[20px] font-normal leading-[23.87px] tracking-[0.01em] text-[#365758]'>1</span></p>
     </div>
     <div className=' text-[12px] font-light leading-[15.12px] tracking-[0.01em] text-[#365758]'>
     pro Gramm
    </div>
 </div>
   <div className='flex justify-center items-center'>
      <MedicialBuyButton/>
   </div>
    </div>
  
  )
}

export default PriceCard