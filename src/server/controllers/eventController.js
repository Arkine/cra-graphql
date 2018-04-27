import mongoose from 'mongoose';
import express from 'express';

// import BaseController from './BaseController';

const Event = mongoose.model('Event');


module.exports = {
	getEvents: async (req, res) => {
		const events = await Event.find({}).limit(10);

		if (!events) {
			res.send(400);

			return;
		}

		res.json(events);
	}
};
