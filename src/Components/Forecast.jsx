import React from 'react'

const Forecast = () => {
  return (
    <div className=''>
        <div className='flex items-center justify-center my-6'>
            <p className='font-medium text-white uppercase'>Daily Forecast</p>
            <hr className='my-2'></hr>
            
            <div className='flex items-center justify-center text-white'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-sm font-light'>4:30pm</p>
                    <img src='https://openweathermap.org/img/wn/01d@2x.png' alt='' className='w-12 my-1' />
                    <p className='font-meduium'>22°</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='text-sm font-light'>4:30pm</p>
                    <img src='https://openweathermap.org/img/wn/01d@2x.png' alt='' className='w-12 my-1' />
                    <p className='font-meduium'>22°</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='text-sm font-light'>4:30pm</p>
                    <img src='https://openweathermap.org/img/wn/01d@2x.png' alt='' className='w-12 my-1' />
                    <p className='font-meduium'>22°</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='text-sm font-light'>4:30pm</p>
                    <img src='https://openweathermap.org/img/wn/01d@2x.png' alt='' className='w-12 my-1' />
                    <p className='font-meduium'>22°</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='text-sm font-light'>4:30pm</p>
                    <img src='https://openweathermap.org/img/wn/01d@2x.png' alt='' className='w-12 my-1' />
                    <p className='font-meduium'>22°</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForecastForecast