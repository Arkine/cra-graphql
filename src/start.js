import dotEnv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';

// Make sure we are running node 7.6+
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 7 || (major === 7 && minor <=5)) {
	console.log('You are using an older version of node. Please upgrade to Node version 7.6 or greater.')
	process.exit();
}

// Set env variables
dotEnv.config({
	path: path.join(__dirname, '../env/variables.env')
});

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
	console.error('There was a DB err:', err);
});

// Import our mongoose models here
import './server/models/Event';
import './server/models/User';

const app = require('./server/App');
const server = app.listen(process.env.PORT, () => {
	console.log(`App listening on port ${server.address().port}`)
});
