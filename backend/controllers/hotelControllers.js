import asyncHandler from 'express-async-handler';
import Hotel from '../models/hotelModel.js';

// Fetch all hotels
// GET /api/hotels
// Public

const getHotels = asyncHandler(async (req, res) => {
	const hotels = await Hotel.find({});
	res.json(hotels);
});

// Fetch single hotels
// GET /api/hotels/:id
// Public
const getHotelById = asyncHandler(async (req, res) => {
	const hotel = await Hotel.findById(req.params.id);

	if (hotel) {
		res.json(hotel);
	} else {
		res.status(404);
		throw new Error('Hotel not found');
	}
});

export { getHotelById, getHotels };
