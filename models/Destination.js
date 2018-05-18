const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const destinationSchema = new Schema({
	departs_at: String,
	arrives_at: String,
	Airport: String,
	Destination: String,
	airline: String,
	flight_number: String,
	price: String
});

mongoose.model('destinations', destinationSchema);
