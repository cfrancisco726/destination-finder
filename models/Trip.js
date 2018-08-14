const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const tripsSchema = new Schema({
	origin: String,
	destination: String,
	departure_date: String,
	return_date: String,
	price: String,
	airline: String,
	_user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('trips', tripsSchema);
