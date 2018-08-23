import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTripList } from '../actions/index';

class TripList extends Component {
	componentDidMount() {
		this.props.getTripList;
	}

	render() {
		return <div />;
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
