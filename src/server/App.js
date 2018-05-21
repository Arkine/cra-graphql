import express from 'express';
import session from 'express-session';
import path from 'path';
import expressValidator from 'express-validator';
import passport from 'passport';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import graphqlHTTP from 'express-graphql';

import schema from './api/rootSchema';

const isDev = process.env.NODE_ENV === 'development' ? true : false;

const MongoStore = require('connect-mongo')(session);

console.log('Starting App...');

const app = express();

// Set the app port
app.set('port', process.env.PORT || 7777);

// Prevents Xor request errs
app.use(cors());

// Set static files directory
// console.log('static', path.join(__dirname, '../public'));
// if (!isDev) {

// }



// Parses body data into JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Expose methods for validating data
app.use(expressValidator());

// Populate req.cookies
app.use(cookieParser());

// Session data
app.use(session({
	secret: process.env.SECRET,
	key: process.env.KEY,
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// Passport for our login logic
app.use(passport.initialize());
app.use(passport.session());


// Graphql Server
app.use('/graphql', (req, res, next) => {
	console.log('hit me');

	next();
},
graphqlHTTP({
	schema,
	graphiql: isDev // Lets us use the cool graphql testing tool. Disable for live
}));



app.use("/static", express.static(path.join(__dirname, '../../build/static')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../build/index.html'));
});

module.exports = app;
