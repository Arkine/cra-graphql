import passport from 'passport';
import mongoose from 'mongoose';

const User = mongoose.model('User');

const options = {
	usernameField: 'email',
	passwordField: 'password',
};

// passport.use(User.createStrategy()); // old way
passport.use('local-login', new passport.Strategy(options, async (email, password, done) => {
	try {
		// Search for user by the email provided
		const user = await User.findOne({email}); // Bug here
		// If there was a user found, compare the password
		if (user) {
			try {
				const isValid = await user.comparePassword(password);

				// If the password was valid, return the user
				if (isValid) {
					return done(false, user);
				} else {
					return done(true);
				}

			} catch (error) {
				// console.log(error);
				return done(true);
			}
		} else {
			return done(true);
		}
	} catch (error) {
		return done(error);
	}
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());