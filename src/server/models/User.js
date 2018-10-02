import mongoose, { Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import mongodbErrorHandler from 'mongoose-mongodb-errors';
import validator from 'validator';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid Email Address'],
        required: 'Please supply an email address'
	},
	password: String,
    name: {
        type: String,
        trim: true
    }
});

// Sets the primary login identification to be the user's email
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
userSchema.plugin(mongodbErrorHandler);

/**
 * Helper method to check is a given ObjectID has the necessary role
 * @name [pre] save/encryptPassword
 * @function
 * @memberof module:model.model/User
 * @inner
 */
userSchema.pre('save', function encryptPassword(next) {
	const user = this;
	// proceed further only if the password is modified or the user is new
	if (!user.isModified('password')) return next();
	// generate salt
	return bcrypt.genSalt((saltError, salt) => {
		if (saltError) return next(saltError);
		return bcrypt.hash(user.password, salt, (hashError, hash) => {
			if (hashError) return next(hashError);
			user.password = hash; // replace a password string with hash value
			return next();
		});
	});
});

module.exports = mongoose.model('User', userSchema);