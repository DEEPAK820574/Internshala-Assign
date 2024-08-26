import React from 'react'
import CanifyCard from '../Ui/cards/CanifyCard'
import MedicalCompositionCard from '../Ui/cards/MedicalCompositionCard'
import MedicineCardTitle from '../Ui/cards/MedicineCardTitle'
import IngredientCard from '../Ui/cards/IngredientCard'

const DetailedMedicineInfo = ({item}) => {
  return (
    <div className="w-[262px] h-[214px] gap-[24px] flex flex-col  ">
      <div className=' flex flex-col gap-[24px]'>
   <div className='flex flex-col gap-[20px]'>
    <div className=' flex flex-col gap-[16px] '>
    <CanifyCard/>
    <MedicalCompositionCard item={item}/>
    </div>
    <MedicineCardTitle item={item}/>
    </div>
    <IngredientCard item={item}/>
    </div>
  </div>
  
  )
}

export default DetailedMedicineInfo