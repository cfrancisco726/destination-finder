import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleApiWrapper } from 'google-maps-react';
const keys = require('../config/keys');


class Container extends Component {
	render() {

		if (!this.props.loaded) {
			return <div>Loading...</div>;
		}
		const style = {
			width: '100vw',
			height: '60vh'
		};

		return (
			<div style={style}>
				<Map google={this.props.google} />
				<MapHeader trips={trips} />
				<ConnectedMap google={this.props.google} />
			</div>
		);
	}
}

function mapStateToProps({ trip }) {
	return { trip };
}
export default GoogleApiComponent({
	apiKey: keys.googleMap
})(Container);
