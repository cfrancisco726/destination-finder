const Trips = require('../models/Trip');

module.exports = app => {
	app.post('/api/triplist', function(req, res) {
		var trip = req.body;

		Trips.create(trip, function(err, tripList) {
			if (err) {
				throw err;
			}
			res.json(tripList);
		});
	});

	app.get('/api/triplist', function(req, res) {
		Trips.find(function(err, tripList) {
			if (err) {
				throw err;
			}
			res.json(tripList);
		});
	});

	app.delete('/api/triplist/:_id', function(req, res) {
		var query = { _id: req.params._id };

		Trips.remove(query, function(err, tripList) {
			if (err) {
			}
			res.json(tripList);
		});
	});
};
