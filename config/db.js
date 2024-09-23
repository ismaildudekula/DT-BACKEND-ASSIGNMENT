const { MongoClient } = require('mongodb');
const dotenv = require('dotenv'); 
dotenv.config();

//create a .env file and add your db details to the file
// MONGO_URI=mongodb://localhost:27017/EventsAPI
// PORT=3000

const url = process.env.MONGO_URI; 
const dbName = 'EventsAPI';  // replace this with your DB name

let db;

async function connectDB() {
    if (db) return db;  // Reuse existing connection if available

    const client = new MongoClient(url);
    try {
        await client.connect();
        db = client.db(dbName);
        console.log(`Connected to MongoDB: ${dbName}`);
        return db;
    } catch (err) {
        console.error('MongoDB connection failed', err);
        throw err;
    }
}

module.exports = connectDB;
