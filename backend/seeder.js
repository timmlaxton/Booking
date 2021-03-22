import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import hotels from './data/hotels.js';
import User from './models/userModel.js';
import Hotel from './models/HotelModel.js';
import Booking from './models/BookingModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await Booking.deleteMany();
		await Hotel.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);

		const adminUser = createdUsers[0]._id;

		const sampleHotels = hotels.map((hotel) => {
			return { ...hotel, user: adminUser };
		});

		await Hotel.insertMany(sampleHotels);
		console.log('Data Imported!');
		process.exit();
	} catch (error) {
		console.error(`${error}`);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Booking.deleteMany();
		await Hotel.deleteMany();
		await User.deleteMany();

		console.log('Data Destroyed!');
		process.exit();
	} catch (err) {
		console.error(`${error}`);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
