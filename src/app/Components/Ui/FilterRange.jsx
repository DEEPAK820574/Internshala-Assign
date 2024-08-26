'use client'
import React, { useState, useRef, useEffect } from 'react';

const FilterRange = ({ initialMin, initialMax,title, symbol }) => {
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);
  const rangeRef = useRef(null);

  const handleMouseMove = (event, setValueFunction) => {
    if (rangeRef.current) {
      const rect = rangeRef.current.getBoundingClientRect();
      const position = (event.clientX - rect.left) / rect.width;
      const newValue = Math.round(position * 100);
      setValueFunction(Math.max(0, Math.min(100, newValue)));
    }
  };

  useEffect(() => {
    if (minValue > maxValue) {
      setMaxValue(minValue);
    }
    if (maxValue < minValue) {
      setMinValue(maxValue);
    }
  }, [minValue, maxValue]);

  return (
    <div className="flex flex-col items-center w-[250px] h-[125px] border-b-[1px]  gap-[20px]" style={{
        borderColor:"rgba(98, 195, 198, 0.3)",
    }}>
      <h3 className="text-h3-18 font-semibold text-center  text-[#365758]">{title}</h3>
      <div 
        className="relative w-[250px] h-[7px] bg-gray-300 rounded-[10px]"
        style={{
            backgroundColor: "rgba(98, 195, 198, 0.3)"
        }} 
        ref={rangeRef}
        onMouseDown={(e) => {
          const updateMin = (event) => handleMouseMove(event, setMinValue);
          const updateMax = (event) => handleMouseMove(event, setMaxValue);
          
          if (Math.abs(e.clientX - rangeRef.current.getBoundingClientRect().left) < Math.abs(e.clientX - rangeRef.current.getBoundingClientRect().right)) {
            document.addEventListener('mousemove', updateMin);
            document.addEventListener('mouseup', () => {
              document.removeEventListener('mousemove', updateMin);
            }, { once: true });
          } else {
            document.addEventListener('mousemove', updateMax);
            document.addEventListener('mouseup', () => {
              document.removeEventListener('mousemove', updateMax);
            }, { once: true });
          }
        }}
      >
       
        <div 
          className="absolute h-full bg-[#62C3C6] rounded-[10px]" 
          style={{
            left: `${minValue}%`,
            right: `${100 - maxValue}%`,
            transition: 'background-color 0.2s ease'
          }}
        />
        <svg 
          className="absolute top-1/2 -translate-y-1/2 cursor-ew-resize" 
          style={{ left: `calc(${minValue}% - 3px)` }} // Adjust for SVG width
          width="16" 
          height="20" 
          viewBox="0 0 16 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 15.3846C0 6.88793 6.88793 0 15.3846 0V4.61539C15.3846 13.1121 8.49669 20 0 20V15.3846Z" fill="#62C3C6"/>
        </svg>
        <svg 
          className="absolute top-1/2 -translate-y-1/2 cursor-ew-resize" 
          style={{ left: `calc(${maxValue}% - 8px)` }} // Adjust for SVG width
          width="16" 
          height="20" 
          viewBox="0 0 16 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 15.3846C0 6.88793 6.88793 0 15.3846 0V4.61539C15.3846 13.1121 8.49669 20 0 20V15.3846Z" fill="#62C3C6"/>
        </svg>
      </div>
      <div className="flex justify-between w-full -mt-[8px]">
        <span className='w-[116px] h-[24px] px-[10px] py-[2px] gap-[10px] rounded-[20px] text-[#365758]' style={{backgroundColor:"rgba(129, 145, 145, 0.1)"}}>{minValue}{symbol}</span>
        <span className='w-[10px] text-[18px] font-normal leading-[21.48px] text-[#585555]'>-</span>
        <span className='w-[116px] h-[24px] px-[10px] py-[2px] gap-[10px] rounded-[20px] text-[#365758]' style={{backgroundColor:"rgba(129, 145, 145, 0.1)"}}>{maxValue}{symbol}</span>
      </div>
    </div>

  );
};

export default FilterRange;
