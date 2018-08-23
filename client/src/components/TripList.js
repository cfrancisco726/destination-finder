import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTripList } from '../actions/index';

class TripList extends Component {
	componentDidMount() {
		this.props.getTripList;
		console.log('triplist', this.props.tripList);
	}

	render() {
		return <div>{this.props.tripList}</div>;
	}
}

function mapStateToProps({ tripList }) {
	return {
		tripList
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			getTripList: getTripList
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(TripList);
