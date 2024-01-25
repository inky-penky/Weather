import React from 'react'

const FavouriteCities = () => {
  const cities = [
    {
      cityName: 'Paris'
    },
    {
      cityName: 'Abuja'
    },
    {
      cityName: 'London'
    },
    {
      cityName: 'Nairobi'
    },
    {
      cityName: 'Accra'
    }
  ]
  
  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city, index) => (
        <button className='flex text-lg font-medium text-white' key={index}>{city.cityName}</button>
      ))}
    </div>
  )
}

export default FavouriteCities