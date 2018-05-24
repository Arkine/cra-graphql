import mongoose, { Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import mongodbErrorHandler from 'mongoose-mongodb-errors';
import validator from 'validator';

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
		index: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid Email Address'],
        required: 'Please supply an email address'
    },
    name: {
        type: String,
        trim: true
    },
	password: {
		type: String
	}
});

// Sets the primary login identification to be the user's email

// userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);