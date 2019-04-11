const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const tripsSchema = new Schema({
	city: String,
	country: String,
	price: String,
	departureDate: String,
	returnDate: String,
	origin: String
});

const Trips = mongoose.model('Trips', tripsSchema);
module.exports = Trips;
