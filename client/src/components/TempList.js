import React, { Component } from 'react';
import { connect } from 'react-redux';

class TempList extends Component {
	constructor(props) {
		super(props);

		this.props.destination.results = [];
	}

	renderTrips() {
		return this.props.destination.results.map(trip => {
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
	}

	render() {
		const tripOrigin = this.props.destination.origin;
		const currency = this.props.destination.currency;
		const trips = this.props.destination.results;
		console.log(trips);
		// console.log(currency);

		return (
			<div>
				<div>{tripOrigin}</div>
				<div>{currency}</div>
				<div>{this.renderTrips()}</div>
			</div>
		);
	}
}

function mapStateToProps({ destination }) {
	return { destination };
}

export default connect(mapStateToProps)(TempList);
