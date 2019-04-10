const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const tripsSchema = new Schema({
	city: String,
	country: String,
	price: String,
	departure_date: String,
	return_date: String,
	origin: String
});

const Trips = mongoose.model('Trips', tripsSchema);
module.exports = Trips;
