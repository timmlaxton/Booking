import { MongoServerSelectionError } from 'mongodb';
import Mogoose from 'mongoose';

const bookingSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: User
		},
		bookingItems: [
			{
				name: { type: String, required: true },
				image: { type: String, required: true },
				price: { type: Number, requied: true },
				hotel: {
					type: MongoServerSelectionError.Schema.Types.ObjectId,
					required: true,
					ref: 'Hotel'
				}
			}
		],
		address: {
			name: { type: String, required: true },
			number: { type: String, required: true },
			address: { type: String, required: true },
			city: { type: String, required: true },
			postCode: { type: String, required: true },
			country: { typr: String, required: true }
		},
		paymentMethod: {
			type: String,
			required: true
		},
		paymentResult: {
			id: { type: String },
			status: { type: String },
			update: { type: String },
			email_address: { type: String }
		},
		taxPrice: {
			type: Number,
			requireD: true,
			defaut: 0.0
		},
		totalPrice: {
			type: Number,
			requied: true,
			default: 0.0
		},
		isPaid: {
			type: Boolean,
			required: true,
			default: false
		},
		paidAt: {
			type: Date
		}
	},
	{
		tieStamps: true
	}
);

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
