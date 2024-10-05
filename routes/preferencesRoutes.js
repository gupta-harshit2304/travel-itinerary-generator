const express = require('express');
const { savePreferences } = require('../controllers/preferencesController');
const router = express.Router();

// POST route for saving preferences and generating itinerary
router.post('/preferences', savePreferences);

module.exports = router;

