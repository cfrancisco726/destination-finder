const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const tripsSchema = new Schema({
	city: String,
	state: String,
	origin: String,
	airport: String,
	price: String,
	airline: String,
	departure_date: String,
	return_date: String,
	origin: String
});

const Trips = mongoose.model('Trips', tripsSchema);
module.exports = Trips;
