import React, { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons'

const WeatherSearch = () => {
  
  return (
    <div className='flex justify-center my-6'>
      <div className='flex items-center justify-center w-3/4 space-x-4 '>
        <input type='text' 
        className='w-full p-2 text-sm lg:text-xl focus:outline-none' 
        placeholder='search for city.....' />
        <UilSearch size={25} className="text-white transition ease-out cursor-pointer over-scale-125" />
      </div>
      <div className='flex items-center justify-center w-1/4'>
        <button name='metric' className='text-xl font-light text-white'>°C</button>
        <p className='text-xl text-white'>|</p>
        <button name='metric' className='text-xl font-light text-white'>°F</button>
      </div>
    </div>
  )
};

export default WeatherSearch;
