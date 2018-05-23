import passport from 'passport';
import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const User = mongoose.model('User');

export function authUser (req, res, next) {
	const token = req.headers = ['authorization'];
	try {
		req.user = verifyToken(token);
		next();
	} catch (e) {
		res.status(401).json({
			message: e.message
		})
	}
};

export async function createToken(email, password) {
	const user = await User.findOne({ where: { email }});

	if (!user) {
		throw new Error('No user with that email');
	}

	const isValid = await bcrypt.compare(password, user.password);

	if (!isValid) {
		throw new Error('Invalid Password');
	}

	// return json web token
	return jsonwebtoken.sign({
		id: user.id,
		email: user.email
	}, process.env.SECRET, {
		expiresIn: '3h',
	})
};

export async function verifyToken(token) {
	const [prefix, payload] = token.split(' ');

	let user = null;
	
	if (!payload) {
		throw new Error('No token provided');
	}

	if (prefix !== 'JWT') {
		throw new Error('Invalid header format.');
	}

	jsonwebtoken.verify(payload, process.env.SECRET, (err, data) => {
		if (err) {
			throw new Error('Invalid Token!');
		} else {
			user = User.findOne({ where: { email: data.email } });
		}
	});

	if (!user) {
		throw new Error('User does not exist.');
	}

	return user;
};