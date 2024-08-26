"use client"
import React, { useState } from 'react';

const Navtext = ({text}) => {
  // State to track hover
  const [isHovered, setIsHovered] = useState(false);

  // Event handlers for mouse enter and leave
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Define colors
  const defaultColor = ' rgba(98, 195, 198, 0.3)';
  const hoverColor = '#28E3E9';

  return (
    <div 
      className='w-auto h-[20px] space-x-[4px] flex   items-center'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='w-[10px] h-[16px]'>
        <svg 
          width="10" 
          height="16" 
          viewBox="0 0 10 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: isHovered ? hoverColor : defaultColor }}
        >
          <path d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z" />
        </svg>
      </div>
      <div className='w-auto h-[20px] text-[16px] font-normal hover:font-bold leading-[20.16px] text-[#585555] hover:text-[#045A5C]'>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Navtext;
