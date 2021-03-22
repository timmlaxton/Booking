const express = require('express');
const hotels = require('./data/hotels');

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

app.listen(5000, console.log('Server Running on port 5000'));
