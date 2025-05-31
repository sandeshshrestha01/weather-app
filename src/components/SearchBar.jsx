import React from 'react'

const SearchBar = ({ location, setLocation, getWeather }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
       <button
        onClick={getWeather}
        className=" bg-blue-600 font-bold ... text-lx text-white px-4 py-2 rounded-lg hover:bg-purple-800 hover:text-white transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Get Weather
      </button>
    </div>
  )
}

export default SearchBar
