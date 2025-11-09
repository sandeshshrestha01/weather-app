import React from 'react'

const WeatherDisplay = ({weather}) => {
  return (
    <div className="mt-6 text-left">
      <h2 className="text-xl font-semibold">
        📍 {weather.location.name}, {weather.location.country} {weather.location.region}
      </h2>
        <div className="flex flex-col ">
       <div className='flex ml-0  mt-2'>
          <img
          className="w-16 h-7 "
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
        />
        <p className="my-0 ">{weather.current.condition.text}</p>
      </div>
       </div>
        
      <p>🌡️ Temperature: {weather.current.temp_c}°C</p>
      <p>💧 Humidity: {weather.current.humidity}%</p>
      <p>💨 Wind: {weather.current.wind_kph} kph</p>
    </div>
  )
}

export default WeatherDisplay
