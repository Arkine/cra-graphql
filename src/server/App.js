import express from 'express';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import React from 'react';
import ReactDOM from 'react-dom';
import cors from 'cors';
import path from 'path';

import routes from './routes';
import apiRoutes from './api';
import errorHandlers from './errorHandlers';

const app = express();

app.set('port', process.env.PORT || 7777);

// Prevents Xor request errs
app.use(cors());

// Parses body data into JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set our routes
app.use('/', routes);
app.use('/api', apiRoutes);

// Error handling routes
app.use(errorHandlers.developmentErrors);
app.use(errorHandlers.productionErrors);
app.use(errorHandlers.notFound);

export default app;
