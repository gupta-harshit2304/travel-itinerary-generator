const { getWeatherData, formatWeatherData } = require('./externalApiService');

// Function to generate a daily itinerary based on the interest and duration
const generateDailyItinerary = (interest, duration) => {
  const dailyActivities = [];

  for (let i = 1; i <= duration; i++) {
    switch (interest) {
      case 'beach':
        dailyActivities.push(`Day ${i}: Go beach surfing and sunbathing at popular spots.`);
        break;
      case 'mountain':
        dailyActivities.push(`Day ${i}: Hike through scenic mountain trails and explore nature.`);
        break;
      default:
        dailyActivities.push(`Day ${i}: Enjoy activities related to ${interest}`);
    }
  }

  return dailyActivities;
};

// Main function to generate the itinerary based on interests, destinations, and duration
const generateItinerary = async (interests, destinations, duration) => {
  const itinerary = [];

  for (const interest of interests) {
    // Get the first destination for the interest or set to 'Unknown Location'
    const location = destinations[interest] ? destinations[interest][0] : 'Unknown Location';

    // Fetch weather data for the first destination
    const weatherData = await getWeatherData(location);
    
    // Format the fetched weather data for a more user-friendly display
    const formattedWeather = formatWeatherData(weatherData);

    // Push the itinerary for each interest
    itinerary.push({
      interest,
      destinations: destinations[interest] || [], // List of destinations for the interest
      dailyItinerary: generateDailyItinerary(interest, duration), // Generate daily activities
      weather: formattedWeather, // Add formatted weather data
    });
  }

  return itinerary;
};

module.exports = { generateItinerary };
