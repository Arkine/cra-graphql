import express from 'express';
import mongoose from 'mongoose';

import { catchErrors } from '../errorHandlers';
import eventsController from '../controllers/eventController';

const router = express.Router();
const Event = mongoose.model('Event');

router.get('/v1/events', eventsController.getEvents);

export default router;