import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const Event = mongoose.model('Event');

import { catchErrors } from '../errorHandlers';

// import eventsController from '../controllers/eventController';
const eventsController = require('../controllers/eventController');

console.log('controller: ', eventsController);

router.get('/v1/events', eventsController.getEvents);

export default router;