const axios = require('axios');
const requireLogin = require('../middlewares/requireLogin');
var bodyParser = require('body-parser');
const keys = require('../config/keys');

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
				const trips = resp.data;
				console.log(trips);
				res.send(trips);
			})
			.catch(error => {
				console.log(error);
				res.send({ error });
			});
	});
};
