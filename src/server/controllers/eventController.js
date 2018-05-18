import mongoose from 'mongoose';

const Event = mongoose.model('Event');

module.exports = {
	getEvents: async () => {
		const events = await Event.find({}).limit(10);

		if (!events) {
			// res.status(404);
		}
		return events;
	},

	getEvent: async (id) => {
		const event = await Event.findOneByID({ _id: id });

		if (!event) {
			// res.status(404);
		}

		return event;
	}
};
