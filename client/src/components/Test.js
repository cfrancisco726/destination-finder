import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const airports = require('../airports');

class Test extends Component {
	render() {
		const list = this.props.trip;
		console.log('test', this.props.trip);

		return <div />;
	}
}

function mapStateToProps({ trip }) {
	return { trip };
}

export default connect(mapStateToProps)(Test);
