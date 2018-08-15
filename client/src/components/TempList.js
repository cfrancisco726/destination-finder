import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrip } from '../actions/index';
const airports = require('../airports');
// import airports from '../airports';

class TempList extends Component {
	constructor(props) {
		super(props);
	}

	airportDetails(trip) {
		const filteredAirport = airports.filter(airport => {
			return trip.destination === airport.code;
		});
		return filteredAirport;
		console.log('airport', filteredAirport);
	}

	renderTrips() {
		if (this.props.trip.results) {
			const trips = this.props.trip.results.slice(0, 9);
			return trips.map(trip => {
				console.log('trip', trip);
				const newTrip = this.airportDetails(trip);
				if (newTrip.length > 0) {
					const tripName = newTrip[0].name;
					const tripCity = newTrip[0].city;
					const tripLat = newTrip[0].lat;
					const tripLon = newTrip[0].lon;

					return (
						<ul>
							<li>{tripName}</li>
							<li>{tripCity}</li>
							<li>{tripLat}</li>
							<li>{tripLon}</li>
							<li>{trip.departure_date}</li>
							<li>{trip.return_date}</li>
							<li>{trip.price}</li>
							<li>{trip.airline}</li>
						</ul>
					);
				}
			});
		}
	}

	render() {
		const tripOrigin = this.props.origin;
		const currency = this.props.currency;

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
// 	function MapDispatchToProps(dispatch) {
// 		return bindActionCreators({ fetchTrip }, dispatch);
// 	}
// }

export default connect(mapStateToProps, { fetchTrip })(TempList);
