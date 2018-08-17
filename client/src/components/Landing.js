import React, { Component } from 'react';
import SearchForm from './SearchForm';
import GoogleMapsContainer from './GoogleMapsContainer';

class Landing extends Component {
	render() {
		return (
			<div>
				<h1 className="card-panel teal lighten-2">Landing</h1>
				<SearchForm />
				<GoogleMapsContainer />
			</div>
		);
	}
}

export default Landing;
