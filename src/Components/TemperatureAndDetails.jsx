import React from 'react'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from "@iconscout/react-unicons"



const TemperatureAndDetails = () => {
  return (
    <div className=''>
       <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p className=''>Cloudy</p>
       </div>
       <div className='flex flex-row items-center justify-between py-3 text-white'>
        <img src='https://openweathermap.org/img/wn/01d@2x.png' alt='' 
        className='w-20'/>
        <p className='flex flex-col space-y-2 text-5xl'>34°</p>
        <div className='flex flex-col space-y-2'>
          <div className='flex items-center justify-center text-sm font-light'>
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className='ml-1 font-medium'>32°</span>
          </div>
          <div className='flex items-center justify-center text-sm font-light'>
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className='ml-1 font-medium'>65%</span>
          </div>
          <div className='flex items-center justify-center text-sm font-light'>
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className='ml-1 font-medium'>11 km/h</span>
          </div>
        </div>
       </div>
       
       <div className='flex items-center justify-center py-3 space-x-2 text-sm text-white'>
        <UilSun />
        <p className='font-light'>
          Rise: <span className='ml-1 font-medium '>06:45 AM</span>
        </p>
        <p className='font-light'>|</p>

        <UilSunset />
        <p className='font-light'>
          Set: <span className='ml-1 font-medium '>06:45 PM</span>
        </p>
        <p className='font-light'>|</p>

        <UilSun />
        <p className='font-light'>
          High: <span className='ml-1 font-medium '>32°</span>
        </p>
        <p className='font-light'>|</p>

        <UilSun />
        <p className='font-light'>
          Low: <span className='ml-1 font-medium '>32°</span>
        </p>
        
       </div>
    </div>
  )
}

export default TemperatureAndDetails