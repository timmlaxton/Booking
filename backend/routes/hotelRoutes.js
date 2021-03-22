import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Hotel from '../models/hotelModel.js';

// Fetch all hotels
// GET /api/hotels
// Public

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const hotels = await Hotel.find({});
		res.json(hotels);
	})
);

// Fetch single hotels
// GET /api/hotels/:id
// Public

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const hotel = await Hotel.findById(req.params.id);

		if (hotel) {
			res.json(hotel);
		} else {
			res.status(404);
			throw new Error('Hotel not found');
		}
	})
);

export default router;
