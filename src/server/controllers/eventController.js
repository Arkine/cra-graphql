import mongoose from 'mongoose';
import express from 'express';

const Event = mongoose.model('Event');

module.exports = {
	getEvents: async (req, res) => {
		// const events = await Event.find({}).limit(10);
		const events = null;
		if (!events) {
			throw new Error('There was an error getting the events...');

			return;
		}
		return events;
	}
};
