import React from 'react'
import CardContainer from './MedicineCard/CardContainer'
import PageNavigator from './Ui/PageNavigator'
import SideDetail from './Ui/SideDetail'
import LogoCard from './Ui/cards/LogoCard'
import FilterNavbar from './Ui/FilterNavbar'
import FilterContainer from './Filter/FilterContainer'
import MedicialCardContainer from './MedicineCard/MedicialCardContainer'

const Main = () => {
  return (
    <div>
      <PageNavigator/>
      <SideDetail/>
      <LogoCard />
      <FilterNavbar/>
      <FilterContainer/>
      <MedicialCardContainer/>

      <div class="w-[262px] h-[23px] absolute top-[2146px] left-[1352px] flex justify-between gap-[30px] ">
        <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_275)">
<path d="M0.229141 10.553L0.229843 10.5538L4.31203 14.6163C4.61785 14.9206 5.1125 14.9195 5.41691 14.6136C5.72129 14.3078 5.72012 13.8131 5.4143 13.5088L2.67352 10.7813L19.2188 10.7813C19.6502 10.7813 20 10.4315 20 10C20 9.56852 19.6502 9.21875 19.2188 9.21875L2.67355 9.21875L5.41426 6.49125C5.72008 6.18688 5.72125 5.69223 5.41687 5.38641C5.11246 5.08051 4.61777 5.07946 4.31199 5.38375L0.229805 9.44625L0.229101 9.44699C-0.0768757 9.75239 -0.0758991 10.2486 0.229141 10.553Z" fill="#62C3C6"/>
</g>
<defs>
<clipPath id="clip0_1_275">
<rect width="20" height="20" fill="white" transform="matrix(-1 0 0 -1 20 20)"/>
</clipPath>
</defs>
</svg>
</div>
        <div className='w-[162px] h-[23px] flex text-[#045A5C] gap-[24px] text-[18px] font-semibold leading-[22.68px]'>
          <p className='w-[8px]'>1</p>
          <p className='w-[12px]'>2</p>
          <p className='w-[12px]'>3</p>
          <p className='w-[15px]'>...</p>
          <p className='w-[19px]'>12</p>
        

        </div>
        <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_282)">
<path d="M19.7709 9.44699L19.7702 9.44625L15.688 5.38375C15.3821 5.07941 14.8875 5.08054 14.5831 5.3864C14.2787 5.69222 14.2799 6.18687 14.5857 6.49125L17.3265 9.21875H0.78125C0.349766 9.21875 0 9.56851 0 10C0 10.4315 0.349766 10.7812 0.78125 10.7812H17.3264L14.5857 13.5087C14.2799 13.8131 14.2788 14.3078 14.5831 14.6136C14.8875 14.9195 15.3822 14.9205 15.688 14.6162L19.7702 10.5537L19.7709 10.553C20.0769 10.2476 20.0759 9.75136 19.7709 9.44699Z" fill="#62C3C6"/>
</g>
<defs>
<clipPath id="clip0_1_282">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
      </div>

    </div>
  )
}

export default Main