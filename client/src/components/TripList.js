import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTripList, deleteTripItem } from '../actions/index';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class TripList extends Component {
	componentDidMount() {
		this.props.fetchTripList();
	}

	constructor(props) {
		super(props);
	}

	onDelete = _id => {
		this.props.deleteTripItem(_id);
	};

	renderTrips() {
		return this.props.triplist.map(trip => {
			return (
				<div item key={trip._id}>
					<Paper className="paper">
						<div className="box">AIR TICKET</div>
						<a
							className="delete-button"
							onClick={this.onDelete.bind(this, trip._id)}
						>
							DELETE
						</a>
						<div className="row-1">
							<article className="col-1-2">
								<h3>Origin:</h3>
								<p> {trip.origin}</p>
							</article>
							<article className="col-1-2">
								<h3>Destination:</h3>

								<p>
									{trip.city}, {trip.country}
								</p>
							</article>
							<article className="col-1-2">
								<h3>Departing:</h3>

								<p>{trip.departureDate}</p>
							</article>
						</div>
						<div className="row-2">
							<article className="col-1-2">
								<h3>Returning:</h3>

								<p>{trip.returnDate}</p>
							</article>
							<article className="col-1-2">
								<h3>Total Price:</h3>

								<p>${trip.price}</p>
							</article>
						</div>
					</Paper>
				</div>
			);
		}, this);
	}

	render() {
		return (
			<div>
				<div className="tripcontainer">{this.renderTrips()}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		triplist: state.triplist.trips
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
