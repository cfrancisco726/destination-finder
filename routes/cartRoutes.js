const Trips = require('../models/Trip');

module.exports = app => {
	app.post('/api/cart', function(req, res) {
		var trip = req.body;

		Trips.create(trip, function(err, cart) {
			if (err) {
				throw err;
			}
			res.json(cart);
		});
	});

	app.get('/api/cart', function(req, res) {
		Trips.find(function(err, cart) {
			if (err) {
				throw err;
			}
			res.json(cart);
		});
	});

	app.delete('/api/cart/:_id', function(req, res) {
		var query = { _id: req.params._id };

		Trips.remove(query, function(err, cart) {
			if (err) {
				console.log('# API DELETE RECORDS: ', err);
			}
			res.json(cart);
		});
	});
};
