import Mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		rating: { type: Number, required: true },
		comment: { type: String, required: true }
	},
	{
		timestamps: true
	}
);

const hotelSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			requireD: true,
			ref: 'User'
		},
		name: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		image2: {
			type: String,
			required: true
		},
		image3: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		location: {
			type: String,
			required: true
		},
		category: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true,
			default: 0
		},
		from: {
			type: Date
		},
		to: {
			type: Date
		},
		bed: {
			type: Number
		},
		reviews: [reviewSchema],
		rating: {
			type: Number,
			required: true,
			default: 0
		},
		numReviews: {
			type: Number,
			required: true,
			default: 0
		},
		featured: {
			type: Boolean,
			default: false
		}
	},
	{
		timestamps: true
	}
);

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;
