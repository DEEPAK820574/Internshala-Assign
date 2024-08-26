import React from 'react'


const footIlink = [
  { text: "Videosprechstunde" },
  { text: "FAQs" },
  { text: "Kontakt" },
];
const footlink2=[
  { text: "Rezept einlösen" },
  { text: "Live Bestand" },
]

const Footer = () => {
  return (
    <div className="w-[1920px] h-[201px] absolute top-[2319px] gap-0 rounded-t-[30px] bg-[#1A8D91] " >
      <div className="w-[78px] h-[69px] absolute top-[89px] left-[310px] gap-[12px] text-[12px] font-light leading-[15.12px] tracking-[0.01em] " style={{
        color:"rgba(255, 255, 255, 0.5)"
      }}>
       <p>AGB</p>
       <p>Impressum</p>
       <p>Datenschutz</p>
      </div>
      {/*  */}
      <div className='relative w-[369px] h-[20px] top-[85px] left-[530px] gap-[30px] flex '>
      {
        footIlink.map((item, index) => (
        <div key={index}
      className='w-auto h-[20px] space-x-[4px] flex   items-center'>
      <div className='w-[10px] h-[16px]'>
        <svg 
          width="10" 
          height="16" 
          viewBox="0 0 10 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill:" #28E3E9 "}}
        >
          <path d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z" />
        </svg>
      </div>
      <div className='w-auto h-[20px] text-[16px] font-normal hover:font-bold leading-[20.16px] text-[#FFFFFF] '>
        <p>{item.text}</p>
      </div>
    </div>))
     
      }
      </div>
      {/*  */}
      <div className='absolute w-[290px] h-[20px] top-[40px] left-[530px] gap-[30px] flex'>
        {
          footlink2.map((item, index) => (
            <div key={index}
          className='w-auto h-[20px] space-x-[4px] flex   items-center'>
          <div className='w-[10px] h-[16px]'>
            <svg 
              width="10" 
              height="16" 
              viewBox="0 0 10 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill:" #28E3E9 "}}
            >
              <path d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z" />
            </svg>
          </div>
          <div className='w-auto h-[20px] text-[16px] font-normal hover:font-bold leading-[20.16px] text-[#FFFFFF] '>
            <p>{item.text}</p>
          </div>
        </div>))
        }
      </div>
      {/*  */}
      <div className="absolute w-[162px] h-[93px] top-[40px] left-[970px] flex flex-col gap-[12px] ">
        <div className='text-[12px] font-light leading-[15.12px] tracking-[0.01em]' style={{
          color:"rgba(255, 255, 255, 0.5)"
        }}>
          <p>Standort</p>
        </div>
        <div className='text-[16px] font-extrabold leading-[21.86px] text-left text-[#FFFFFF]'>
          <p>Bergstraße 49 - 57 69469 Weinheim(3 Glocken Quartier)</p>

        </div>
       </div>
       {/* */}
       <div className="w-auto flex flex-col h-[49px] absolute top-[40px] left-[1190px] gap-[12px] ">
        <div className='text-[12px] font-light leading-[15.12px] tracking-[0.01em]' style={{
          color:"rgba(255, 255, 255, 0.5)"
        }}>
          <p>Telefon</p>
        </div>
        <div className=' w-auto text-[16px] font-extrabold leading-[21.86px] text-left text-[#FFFFFF]'>
          <p>0223 545 5250</p>

        </div>
</div>
{/* */}
<div className="w-auto h-[121px] absolute top-[40px] left-[1410px] flex flex-col gap-[12px] ">
<div className='text-[12px] font-light leading-[15.12px] tracking-[0.01em]' style={{
          color:"rgba(255, 255, 255, 0.5)"
        }}>
          <p>Öffnungszeiten</p>
        </div>
        
        <div className='flex flex-col gap-[4px]'>
        <div className='text-[12px] font-light leading-[15.12px] tracking-[0.01em]' style={{
          color:"rgba(255, 255, 255, 0.5)"
        }}>
          <p>Mo-Fr</p>
        </div>
        <div className=' w-auto text-[16px] font-extrabold leading-[21.86px] text-left text-[#FFFFFF]'>
          <p>09:00 - 18:00 Uhr</p>
        </div>
        </div>
        
        <div className='flex flex-col gap-[4px]'>
        <div className='text-[12px] font-light leading-[15.12px] tracking-[0.01em]' style={{
          color:"rgba(255, 255, 255, 0.5)"
        }}>
          <p>Sa</p>
        </div>
        <div className=' w-auto text-[16px] font-extrabold leading-[21.86px] text-left text-[#FFFFFF]'>
          <p>09:00 - 14:00 Uhr</p>
        </div>
        </div>

</div>



   </div>

  
  )
}

export default Footer