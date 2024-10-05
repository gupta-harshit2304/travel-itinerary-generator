const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors'); // Import CORS

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Create an Express app
const app = express();

// Body parser middleware
app.use(express.json());

// Use CORS middleware
app.use(cors()); // Enable CORS for all routes

// Load routes
app.use('/api', require('./routes/preferencesRoutes'));

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
