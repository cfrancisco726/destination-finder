const Trips = require('../models/Trip');

module.exports = app => {
	app.post('/api/triplist', function(req, res) {
		var trip = req.body;
		console.log('from map', trip);

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
			console.log('triplist', tripList);
			res.json(tripList);
		});
	});

	app.delete('/api/triplist/:_id', function(req, res) {
		var query = { _id: req.params._id };
		console.log(query)

		Trips.remove(query, function(err, tripList) {
			if (err) {
				console.log('# API DELETE TRIPS: ', err);
			}
			res.json(tripList);
		});
	});
};
