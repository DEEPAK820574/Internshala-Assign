import React from 'react'
import DetailedMedicineInfo from './DetailedMedicineInfo';
import PriceCard from '../Ui/cards/PriceCard'
const DetailContainer = ({item}) => {
  return (
    <div>
        <div className="w-[309px] h-[339px] p-[24px] flex flex-col gap-[30px] rounded-br-[30px]  border-t-2 border-t-custom-border "
        style={{
            backgroundColor:"rgba(98, 195, 198, 0.3)",
        }}>
      <DetailedMedicineInfo item={item}/>
      <PriceCard/>
</div>
</div>
  )
}

export default DetailContainer