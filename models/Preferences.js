const mongoose = require('mongoose');

const PreferencesSchema = new mongoose.Schema({
  budget: { type: Number, required: true },
  interests: { type: [String], required: true },
  duration: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Preferences', PreferencesSchema);
