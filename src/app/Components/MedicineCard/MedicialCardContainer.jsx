import React from 'react'
import CardContainer from './CardContainer'

let firstCardData = [{
    visible:true,
    composition:"THC 18%",
    medicialTitle:"Cannabis Flos 18/1 PT Mango",
    flavour:"Mango"
}
]
let SecondCardData = [{
        visible:false,
        composition:"THC 25%",
        medicialTitle:"Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify",
        flavour:"Pink Kush"
}]

const MedicialCardContainer = () => {
  return (
    <div className="w-[970px] h-[1702px] absolute top-[404px] left-[640px] flex flex-col gap-[20px] ">
        <div>
            {
            firstCardData.map((item, index) => (
                <div key={index} className='w-[970px] h-[554] gap-[20px] flex '>
                <CardContainer  item={item}/>
                <CardContainer  item={item}/>
                <CardContainer  item={item}/>
                </div>
            ))
        }
        </div>
        <div>
            {
            SecondCardData.map((item, index) => (
                <div key={index} className='w-[970px] h-[554] gap-[20px] flex'>
                <CardContainer  item={item}/>
                <CardContainer  item={item}/>
                <CardContainer  item={item}/>
                </div>
            ))
        }
        </div>
        <div>
            {
            firstCardData.map((item, index) => (
                <div key={index} className='w-[970px] h-[554] gap-[20px] flex'>
                <CardContainer  item={item}/>
                <CardContainer  item={item}/>
                <CardContainer  item={item}/>
                </div>
            ))
        }
        </div>
        
    

  
  
    </div>
  )
}

export default MedicialCardContainer