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
		// const temp = [
		// 	{
		// 		destination: 'ATL',
		// 		departure_date: '2018-09-09',
		// 		return_date: '2018-09-14',
		// 		price: '110.40',
		// 		airline: 'B6'
		// 	}
		// ];
		// console.log(temp);
		// res.send(temp);

		axios
			.get(URL)
			.then(response => {
				const trips = response.data;
				console.log(trips);
				res.send(trips);
			})
			.catch(error => {
				console.log(error);
				res.send({ error });
			});
	});

	// 	app.post('/api/trip', async (req, res) => {
	// 		const trip = req.body;
	// 		console.log('body', trip);
	//
	// 		const URL = `${AMADEUS_URL}&origin=${trip[0].origin}&departure_date=${
	// 			trip[0].date
	// 		}&duration=${trip[0].duration}`;
	// 		console.log(URL);
	//
	// 		const trips = await axios.get(URL);
	// 		res.json(trips);
	// });
};
