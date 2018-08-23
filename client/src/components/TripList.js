import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTripList } from '../actions/index';

class TripList extends Component {
	componentDidMount() {
		this.props.fetchTripList();
		console.log('tripslist', this.props.tripsList);
	}
	//
	renderTrips() {
		return this.props.tripsList.map(trip => {
			return (
				<div key={trip._id}>
					<ul>
						<li>{trip.city}</li>
						<li>{trip.state}</li>
						<li>{trip.airport}</li>
						<li>{trip.price}</li>
						<li>{trip.airline}</li>
						<li>{trip.departure_date}</li>
						<li>{trip.return_date}</li>
						<li>{trip.origin}</li>
					</ul>
				</div>
			);
		});
	}

	render() {
		return <div />;
	}
}

function mapStateToProps({ tripsList }) {
	return { tripsList };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchTripList: fetchTripList
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(TripList);
