const axios = require('axios');

// Function to get weather data from external API
const getWeatherData = async (location) => {
  try {
    const apiKey = process.env.WEATHER_API_KEY; // API key from .env
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
    );
    
    return response.data.current; // Return current weather data
  } catch (error) {
    console.error(`Error fetching weather data: ${error}`);
    return null;
  }
};

// Function to format weather data for user-friendly output
const formatWeatherData = (weather) => {
    return {
      temperature: `${weather.temp_c}°C (${weather.temp_f}°F)`,
      condition: weather.condition.text,
      wind: `${weather.wind_kph} kph (${weather.wind_mph} mph), ${weather.wind_dir}`,
      humidity: `${weather.humidity}%`,
      uvIndex: weather.uv,
    };
  };

module.exports = { getWeatherData, formatWeatherData };
