const express = require('express');
const eventRoutes = require('./routes/eventRoutes');
const app = express();

// Middleware
app.use(express.json());  // Parse JSON bodies

// Routes
app.use('/api/v3/app', eventRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
