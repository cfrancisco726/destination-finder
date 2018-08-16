import React, { Component } from 'react';
import { connect } from 'react-redux';

const airports = require('../airports');

class Test extends Component {
	render() {
		const list = this.props.trips;
		console.log('test', list);

		return <div />;
	}
}

function mapStateToProps({ trips }) {
	return { trips };
}

export default connect(mapStateToProps)(Test);
