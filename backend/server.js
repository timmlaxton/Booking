import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import hotels from './data/hotels.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
	res.send('API is running...');
});

app.get('/api/hotels', (req, res) => {
	res.json(hotels);
});

app.get('/api/hotels/:id', (req, res) => {
	const hotel = hotels.find((p) => p._id === req.params.id);
	res.json(hotel);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`));
