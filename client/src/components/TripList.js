import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTripList, deleteTripItem } from '../actions/index';

class TripList extends Component {
	componentDidMount() {
		this.props.fetchTripList();
		console.log('tripslist', this.props.triplist);
	}

	onDelete = trip => {
		console.log('delete', trip);
		this.props.deleteTripItem(trip);
	};
	renderTrips() {
		return this.props.triplist.map(trip => {
			return (
				<div key={trip._id}>
					<ul>
						<li>{trip._id}</li>
						<li>{trip.city}</li>
						<li>{trip.state}</li>
						<li>{trip.airport}</li>
						<li>{trip.price}</li>
						<li>{trip.airline}</li>
						<li>{trip.departure_date}</li>
						<li>{trip.return_date}</li>
						<li>{trip.origin}</li>
					</ul>
					<button>delete</button>
				</div>
			);
		});
	}

	render() {
		return <div>{this.renderTrips()}</div>;
	}
}

function mapStateToProps({ triplist }) {
	return {
		triplist
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			fetchTripList: fetchTripList,
			deleteTripItem: deleteTripItem
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(TripList);
