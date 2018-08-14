import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrip } from '../actions/index';

class TempList extends Component {
	constructor(props) {
		super(props);
	}

	renderTrips() {
		console.log(this.props.trip.results);
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
		const tripOrigin = this.props.origin;
		const currency = this.props.currency;
		// const trips = this.props.trip.results;
		// const airportMatch = airportCodes.filter(airport => {
		// 	return airport.code === 'AAA';
		// });
		// console.log(trips);
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
// 	function MapDispatchToProps(dispatch) {
// 		return bindActionCreators({ fetchTrip }, dispatch);
// 	}
// }

export default connect(mapStateToProps, { fetchTrip })(TempList);
