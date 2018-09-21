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

		const URL = `${AMADEUS_URL}&origin=${trip[0].origin}&departure_date=${
			trip[0].date
		}&duration=${trip[0].duration}`;

		axios
			.get(URL)
			.then(resp => {
				const tripData = resp.data;
				console.log('resp', resp.data);

				function airportDetails(trip) {
					const filteredAirport = airports.filter(airport => {
						return trip.destination === airport.code;
					});
					return filteredAirport;
				}

				function tripSearch() {
					const trips = tripData.results.slice(0, 20);
					const filteredTrips = trips.map(trip => {
						const matchedTrip = airportDetails(trip);
						if (matchedTrip.length > 0) {
							return (tripObject = {
								origin: tripData.origin,
								currency: tripData.currency,
								airport: matchedTrip[0].name,
								city: matchedTrip[0].city,
								state: matchedTrip[0].state,
								country: matchedTrip[0].country,
								lat: matchedTrip[0].lat,
								lng: matchedTrip[0].lon,
								price: trip.price,
								airline: trip.airline,
								departure_date: trip.departure_date,
								return_date: trip.return_date
							});
						}
					});
					return filteredTrips.filter(obj => obj);
				}
				res.send(tripSearch());
			})
			.catch(error => {
				res.status(400).json({ error: error.toString() });
			});
	});
};
