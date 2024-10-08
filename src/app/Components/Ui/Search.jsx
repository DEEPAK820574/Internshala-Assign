"use client"
import React, { useState } from 'react';
import './Search.css';

const Search = ({bg, containerWidth}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // Determine the icon size based on whether the input is focused or has text
  const iconSize = isFocused || query ? '24px' : '20px';

  return (
    <div className='h-[34px] rounded-[30px] flex items-center pl-[16px] pr-[16px] ' style={{
      width:containerWidth,
      backgroundColor:bg,
    }}>
      <input
        type='text'
        value={query}
        onChange={handleChange}
        placeholder='Suchen'
        className='searchinput flex-1 h-full  border-none outline-none  text-[16px]'
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          backgroundColor:bg,
        }}
      />
      <div 
        className='ml-[8px]' 
        style={{ width: iconSize, height: iconSize }} // Dynamically set the width and height of the icon
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.11496 0.609473C6.1279 0.612804 4.22318 1.40364 2.81812 2.8087C1.41306 4.21376 0.622228 6.11848 0.618896 8.10554C0.620557 10.0943 1.41045 12.0013 2.81552 13.4087C4.22058 14.8161 6.12624 15.6092 8.11496 15.6142C9.87874 15.6142 11.5039 14.9937 12.789 13.967L15.9102 17.0882C16.0684 17.2352 16.2773 17.3153 16.4932 17.3115C16.7091 17.3077 16.9151 17.2204 17.068 17.0679C17.2208 16.9155 17.3087 16.7097 17.313 16.4938C17.3174 16.2779 17.2379 16.0688 17.0913 15.9103L13.9701 12.7859C15.0361 11.4601 15.6173 9.8099 15.6173 8.10869C15.6173 3.9764 12.2472 0.609473 8.11496 0.609473ZM8.11496 2.27876C11.3465 2.27876 13.948 4.87719 13.948 8.10554C13.948 11.3339 11.3465 13.9481 8.11496 13.9481C4.88346 13.9481 2.28504 11.3433 2.28504 8.11183C2.28504 4.88034 4.88346 2.27876 8.11496 2.27876Z" fill="#28E3E9"/>
        </svg>
      </div>
    </div>
  );
}

export default Search;
