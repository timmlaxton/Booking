import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import hotelRoutes from './routes/hotelRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
	res.send('API is running...');
});

app.use('/api/hotels', hotelRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`));
