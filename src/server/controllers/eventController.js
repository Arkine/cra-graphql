import mongoose from 'mongoose';

const Event = mongoose.model('Event');

module.exports = {
	getEvents: async () => {
		const events = await Event.find({}).limit(10);

		if (!events) {
			throw new Error('There was an error getting the events...');

			return;
		}
		return events;
	}
};
