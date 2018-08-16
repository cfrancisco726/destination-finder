const axios = require('axios');
const requireLogin = require('../middlewares/requireLogin');
var bodyParser = require('body-parser');
const keys = require('../config/keys');
const airports = require('../airports');

module.exports = app => {
	const AMADEUS_URL = `https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=${
		keys.amadeusKey
	}`;

	app.post('/api/trip', (req, res) => {
		const trip = req.body;
		console.log('body', trip);

		const URL = `${AMADEUS_URL}&origin=${trip[0].origin}&departure_date=${
			trip[0].date
		}&duration=${trip[0].duration}`;
		console.log(URL);

		axios
			.get(URL)
			.then(resp => {
				const tripData = resp.data;

				function airportDetails(trip) {
					const filteredAirport = airports.filter(airport => {
						return trip.destination === airport.code;
					});
					return filteredAirport;
					console.log('airport', filteredAirport);
				}

				function tripList() {
					console.log('trips', tripData.results);
					const trips = tripData.results.slice(0, 9);
					return trips.map(trip => {
						const matchedTrip = airportDetails(trip);
						if (matchedTrip.length > 0) {
							return (tripObject = {
								origin: tripData.origin,
								currency: tripData.currency,
								tripName: matchedTrip[0].name,
								tripCity: matchedTrip[0].city,
								tripLat: matchedTrip[0].lat,
								tripLon: matchedTrip[0].lon
							});
						}
					});
				}

				res.send(tripList());
			})
			.catch(error => {
				console.log(error);
				res.send({ error });
			});
	});
};
