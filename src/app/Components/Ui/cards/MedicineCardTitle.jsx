import React from 'react'

const MedicineCardTitle = ({item}) => {
  return (
    <div className="w-[255px] h-[54px] text-[18px] font-semibold leading-[22.68px] tracking-[0.01em] text-[#116A6C] ">
      <p>{item.medicialTitle}</p>
   </div>

  )
}

export default MedicineCardTitle