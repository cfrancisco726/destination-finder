import React, { Component } from 'react';
import { connect } from 'react-redux';
// const airportCodes = require('../airports.js');

class TempList extends Component {
	constructor(props) {
		super(props);
	}

	renderTrips() {
		if (this.props.trip.results) {
			const trips = this.props.trip.results.slice(0, 9);
			return trips.map(trip => {
				return (
					<ul>
						<li>{trip.destination}</li>
						<li>{trip.departure_date}</li>
						<li>{trip.return_date}</li>
						<li>{trip.price}</li>
						<li>{trip.airline}</li>
					</ul>
				);
			});
		} else {
			return [];
		}
	}

	render() {
		const tripOrigin = this.props.destination;
		const currency = this.props.trip.currency;
		const trips = this.props.trip.results;
		// const airportMatch = airportCodes.filter(airport => {
		// 	return airport.code === 'AAA';
		// });
		console.log(trips);
		// console.log(airportMatch);

		return (
			<div>
				<div>{tripOrigin}</div>
				<div>{currency}</div>
				<div>{this.renderTrips()}</div>
			</div>
		);
	}
}

function mapStateToProps({ trip }) {
	return { trip };
}

export default connect(mapStateToProps)(TempList);
