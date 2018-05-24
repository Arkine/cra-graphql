import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const User = mongoose.model('User');

module.exports = {
	register: async (name, email, password) => {
		const hashedPassword = await bcrypt.hash(password, 10);

		console.log('hashed...');

		const user = new User({
			name,
			email,
			password: hashedPassword
		});
		
		await user.save();
		
		console.log('user saved!');

		return {
			token: jwt.sign({ userId: user.id }, process.env.SECRET),
			user
		}
	},

	login: async (email, password) => {
		const user = await User.findOne({ email });

		if (!user) {
			throw new Error('No User found with that email.');
		}

		const valid = bcrypt.compare(password, user.password);

		if (!valid) {
			throw new Error('Invalid password.');
		}

		return {
			token: jwt.sign({ userId: user.id }, process.env.SECRET),
			user
		}
	}

}