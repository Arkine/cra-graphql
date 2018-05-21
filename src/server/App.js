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

// Our GraphQL Schema model
import schema from './api/rootSchema';

const MongoStore = require('connect-mongo')(session);

console.log('Starting App...');

const app = express();

app.set('port', process.env.PORT || 7777);

// Prevents Xor request errs
app.use(cors());

// Set static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Parses body data into JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Expose methods for validating data
app.use(expressValidator());

// Populate req.cookies
app.use(cookieParser());

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

// Set our routes
app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true // Lets us use the cool graphql testing tool
}));

// Error handling routes

export default app;
