import express from 'express';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import cors from 'cors';

import graphqlHTTP from 'express-graphql';
import schema from './api/rootSchema';

console.log('Starting App...');

const app = express();

app.set('port', process.env.PORT || 7777);

// Prevents Xor request errs
app.use(cors());

// Parses body data into JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set our routes
app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

// Error handling routes

export default app;
