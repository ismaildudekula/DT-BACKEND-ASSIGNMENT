const express = require('express');
const router = express.Router();
const {
  getEventById,
  getLatestEvents,
  createEvent,
  updateEventById,
  deleteEventById
} = require('../controllers/eventController');

// routes
// router.get('/events', getEventById);  // Get an event by id
router.get('/events', getLatestEvents);  // Get events with pagination
router.post('/events', createEvent);  // Create a new event
router.put('/events/:id', updateEventById);  // Update an event by id
router.delete('/events/:id', deleteEventById);  // Delete an event by id

module.exports = router;
