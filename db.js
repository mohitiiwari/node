import mongoose from 'mongoose';
// define the mongodb url
// const mongoURL = 'mongodb://localhost:27017/hotels';
import dotenv from 'dotenv';

dotenv.config();

const mongoURL = process.env.MONGO_URI;

console.log('MongoDB URI exists:', mongoURL ? 'Yes' : 'No');

// Connect with error handling
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => {
    console.error('Initial connection error:', err);
});

//Get the default connection
// Moongoose creates a default connection when you call mongoose.connect

const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('connected', () => {
    console.log('connected to MongoDB server');
});

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

export default db;