import express from 'express';

const router = express.Router();

exports.developmentErrors = (err, req, res, next) => {
	err.stack = err.stack || '';
	const errorDetails = {
		message: err.message,
		status: err.status,
		stackHighlighted: err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>')
	}

	res.status(err.status || 500);

	next();
};

exports.productionErrors = (err, req, res, next) => {
	res.status(err.status || 500);


	next();
};

exports.catchErrors = (fn) => {
	router.use(async (req, res, next) => {
		return function(req, res, next) {
			return fn(req, res, next).catch(next);
		}
	});
};

exports.notFound = (req, res, next) => {
	res.status(404);

	next();
}