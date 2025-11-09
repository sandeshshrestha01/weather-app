import React, { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import WeatherDisplay from "./components/WeatherDisplay.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";

const App = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const getWeather = async () => {
    if (!location) {
      setError("Please enter a location.");
      setWeather(null);
      return;
    }

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`
      );

      if (!response.ok) {
        throw new Error("Location not found");
      }

      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError("Could not fetch weather data. Please check the location.");
      setWeather(null);
    }
  };

  return (
   <div className="min-h-screen bg-blue-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">🌦️ Weather App</h1>
      <SearchBar 
      location={location}
      setLocation={setLocation}
      getWeather={getWeather}/>

      {error && <ErrorMessage message={error} />} 
      {weather && <WeatherDisplay weather={weather} />}
      </div>
    </div>
  );
};

export default App;
