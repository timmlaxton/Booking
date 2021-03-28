import express from 'express';
const router = express.Router();
import { getHotels, getHotelById } from '../controllers/hotelControllers.js';

router.route('/').get(getHotels);
router.route('/:id').get(getHotelById);

export default router;
