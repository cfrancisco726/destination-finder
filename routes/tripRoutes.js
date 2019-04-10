const Amadeus = require('amadeus');


const axios = require('axios');
const requireLogin = require('../middlewares/requireLogin');
var bodyParser = require('body-parser');
const keys = require('../config/keys');
const airports = require('../airports');

module.exports = app => {
	// const AMADEUS_URL = `https://test.api.amadeus.com/v1/shopping/flight-destinations?`;

	const amadeus = new Amadeus({
		clientId: keys.amadeusKey,
		clientSecret: keys.amadeusSecret
	  });

	console.log(keys.amadeusKey)


	app.post('/api/trip', (req, res) => {
		const trip = req.body;
		console.log('post',trip[0].origin)


		amadeus.shopping.flightDestinations
			.get({
				origin: trip[0].origin,
				departureDate: trip[0].date,
				duration: trip[0].duration
			})
		// axios
			// .get(URL)
			.then(resp => {
				const tripData = resp.data;
				console.log('tripdata', tripData)

				function airportDetails(trip) {
					const filteredAirport = airports.filter(airport => {
						return trip.destination === airport.code;
					});
					return filteredAirport;
				}

				function tripSearch() {
					const trips = tripData.slice(0, 10);
					const filteredTrips = trips.map(trip => {
						const matchedTrip = airportDetails(trip);
						if (matchedTrip.length > 0) {
							return (tripObject = {
								origin: trip.origin,
								city: matchedTrip[0].city,
								country: matchedTrip[0].country,
								lat: matchedTrip[0].lat,
								lng: matchedTrip[0].lon,
								price: trip.price.total,
								departure_date: trip.departureDate,
								return_date: trip.returnDate
							});
						}
					});
					console.log('filteredTrip', filteredTrips)
					return filteredTrips.filter(obj => obj);
				}
				res.send(tripSearch());
			})
			.catch(responseError => {
				console.log('new error', responseError.code)
				// res.status(400).json({ error: error.toString() }) ;
			});
	});
};
