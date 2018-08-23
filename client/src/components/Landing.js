import React, { Component } from 'react';
import SearchForm from './SearchForm';
import GoogleMapsContainer from './GoogleMapsContainer';
import TripList from './TripList';

class Landing extends Component {
	render() {
		return (
			<div>
				<SearchForm />
				<GoogleMapsContainer />
				<TripList />
			</div>
		);
	}
}

export default Landing;
