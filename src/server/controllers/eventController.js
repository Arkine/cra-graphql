import mongoose from 'mongoose';

const Event = mongoose.model('Event');

module.exports = {
	getEvents: async () => {
		const events = await Event.find({});

		if (!events) {
			// res.status(404);
		}

		return events;
	},

	getEvent: async (id) => {
		const event = await Event.findById(id);

		if (!event) {
			// res.status(404);
		}

		return event;
	},

	addEvent: (data) => {
		const event = new Event({
			title: data.title
		});

		event.save();

		return event;
	},

	updateEvent: async (data) => {
		const event = await Event.findOneAndUpdate(
			{
				id: data.id
			},{
				$set: {
					title: data.title
				}
			},{
				new: true
			}
		);

		event.save();
	}
};
