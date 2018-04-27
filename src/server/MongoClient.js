import mongoose from 'mongoose';
mongoose.Promise = global.Promise;


export default class MongoClient {
	constructor() {
	}

	connect() {

		return new Promise((resolve, reject) => {
			mongoose.connect(process.env.DATABASE);

			mongoose.connection.on('error', (err) => {
				console.error('There was a DB err:', err);
			});
		});
	}

}