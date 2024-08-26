import React from 'react'

const LogoCard = () => {
  return (
    <div class="absolute top-[294px] left-[310px] w-[160px] h-[50px] gap-[12px] flex  items-center">
  <div><svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M0 20C0 8.95431 8.95431 0 20 0V6C20 17.0457 11.0457 26 0 26V20Z" fill="#28E3E9"/>
    </svg>
   </div>
   <div className='w-[128px] h-[45px] text-[36px] font-semibold leading-[45.36px] text-[#116A6C]'>
    <p> Blüten</p>
   </div>
  </div>
  )
}

export default LogoCard