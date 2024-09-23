const { ObjectId } = require('mongodb');
const connectDB = require('../config/db');

// Fetch event by ID (if id provided)
// Fetch events by recency with pagination(if type provided)
exports.getLatestEvents = async (req, res) => {
    const db = await connectDB();
    const { limit = 10, page = 1, id, type } = req.query;
  
    if (page < 1 || limit < 1) {
      return res.status(400).json({ message: 'Page and limit must be positive integers.' });
    }
  
    try {
      if (id) {
        // Get event by ID
        const event = await db.collection('events').findOne({ _id: new ObjectId(id) });
        if (!event) return res.status(404).json({ message: 'Event not found' });
        return res.json(event);
      }
  
      if (type === 'latest') {
        // Get latest events
        const totalEvents = await db.collection('events').countDocuments();
        const events = await db.collection('events')
          .find({})
          .sort({ schedule: -1 })  // Sorting by schedule in descending order
          .skip((page - 1) * limit)
          .limit(parseInt(limit))
          .toArray();
  
        if (events.length === 0) {
          return res.status(404).json({ message: 'No events found' });
        }
  
        res.json({
          totalEvents,
          totalPages: Math.ceil(totalEvents / limit),
          currentPage: page,
          events,
        });
      } else {
        return res.status(400).json({ message: 'Invalid request type. Use "latest" or provide an event ID.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching events', error });
    }
  };
  
  
  

// Create a new event
exports.createEvent = async (req, res) => {
  const db = await connectDB();
  const { name, tagline, schedule, description, moderator, category, sub_category, rigor_rank, attendees } = req.body;
  
  try {
    const event = {
      name,
      tagline,
      schedule,
      description,
      moderator,
      category,
      sub_category,
      rigor_rank,
      attendees,
      files: req.files || null
    };

    const result = await db.collection('events').insertOne(event);
    res.json({ message: 'Event created', eventId: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: 'Error creating event', error });
  }
};

// Update event by ID
exports.updateEventById = async (req, res) => {
  const db = await connectDB();
  const eventId = req.params.id;
  const updatedEvent = req.body;

  try {
    const result = await db.collection('events').updateOne({ _id: new ObjectId(eventId) }, { $set: updatedEvent });
    if (result.modifiedCount === 0) return res.status(404).json({ message: 'Event not found or no changes made' });
    res.json({ message: 'Event updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating event', error });
  }
};

// Delete event by ID
exports.deleteEventById = async (req, res) => {
  const db = await connectDB();
  const eventId = req.params.id;

  try {
    const result = await db.collection('events').deleteOne({ _id: new ObjectId(eventId) });
    if (result.deletedCount === 0) return res.status(404).json({ message: 'Event not found' });
    res.json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error });
  }
};
