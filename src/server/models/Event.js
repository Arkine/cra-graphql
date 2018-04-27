import mongoose, { Schema } from 'mongoose';

// const Schema = mongoose.Schema;

const eventSchema = new Schema({
	title: String,
	author: mongoose.Schema.ObjectId,
	created: {
		type: Date,
		default: Date.now()
	},
	description: String,
	photo: String,
	slug: String
});

module.exports = mongoose.model('Event', eventSchema);