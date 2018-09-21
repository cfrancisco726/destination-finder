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
		console.log('delete', _id);
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
						<table>
							<tbody>
								<tr>
									<th>Origin</th>
									<th>Destination</th>
									<th>Departing</th>
									<th>Returning</th>
								</tr>
								<tr>
									<td>{trip.origin}</td>
									<td>
										{trip.city}, {trip.state}
									</td>
									<td>{trip.departure_date}</td>
									<td>{trip.return_date}</td>
								</tr>
							</tbody>
						</table>
						<table>
							<tbody>
								<tr>
									<th>Airline</th>
									<th>Destination Airport</th>
									<th />
									<th>Total Price</th>
								</tr>
								<tr>
									<td>{trip.airline}</td>
									<td>{trip.airport}</td>
									<td />

									<td>${trip.price}</td>
								</tr>
							</tbody>
						</table>
					</Paper>
				</div>
			);
		}, this);
	}

	render() {
		return (
			<div>
				<p className="emptytrips">
					{!this.props.triplist.length > 0 ? 'You Have No Saved Trips' : ' '}
				</p>
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
