const { generateItinerary } = require('../services/itineraryService');
const Preferences = require('../models/Preferences');

// Save preferences and generate an itinerary
const savePreferences = async (req, res) => {
  try {
    const { budget, interests, duration } = req.body;

    // Save preferences in MongoDB
    const preferences = await Preferences.create({ budget, interests, duration });

    // Define destinations for each interest
    const destinations = {
      beach: ['Goa', 'Miami'],
      mountain: ['Manali', 'Aspen'],
      city: ['New York', 'Tokyo'],
      adventure: ['Queenstown', 'Zermatt']
    };

    // Generate the detailed itinerary
    const itinerary = await generateItinerary(interests, destinations, duration);

    // Respond with preferences and generated itinerary
    res.status(200).json({
      message: 'Preferences saved and detailed itinerary generated',
      preferences,
      itinerary,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { savePreferences };
