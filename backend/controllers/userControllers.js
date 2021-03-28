import asyncHnadler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// Auth user retrieve token
// POST /api/users/login
// Public

const authUser = asyncHnadler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id)
		});
	} else {
		res.status(401);
		throw new Error('Invalid Email and/or Password');
	}
});

export { authUser };
