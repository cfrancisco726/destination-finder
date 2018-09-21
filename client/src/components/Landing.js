import React, { Component } from 'react';
import SearchForm from './SearchForm';
import GoogleMapsContainer from './GoogleMapsContainer';
import TripList from './TripList';

class Landing extends Component {
	render() {
		return (
			<div className="landing">
				<SearchForm />
				<GoogleMapsContainer />
			</div>
		);
	}
}

export default Landing;
