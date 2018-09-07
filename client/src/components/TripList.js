import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTripList, deleteTripItem } from '../actions/index';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const style = {
	root: {
		flexGrow: 1
	},
	paper: {
		textAlign: 'center',
		width: '100%',
		margin: 20
	}
};

class TripList extends Component {
	componentDidMount() {
		this.props.fetchTripList();
		console.log('tripslist', this.props.triplist);
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
				<div>
					<Grid container>
						<Grid item key={trip._id}>
							<Paper style={style.paper}>
								<Grid item sm>
									{trip.origin}
								</Grid>
								<Grid item sm>
									{trip.city}
									{trip.state}
								</Grid>
								<Grid item sm>
									{trip.departure_date}
								</Grid>
								<Grid item sm>
									{trip.return_date}
								</Grid>
								<button onClick={this.onDelete.bind(this, trip._id)}>
									delete
								</button>
							</Paper>
						</Grid>
					</Grid>
				</div>
			);
		}, this);
	}

	render() {
		return <div>{this.renderTrips()}</div>;
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
