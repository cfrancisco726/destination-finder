import React, { Component } from 'react';
import SearchForm from './SearchForm';
import GoogleMapsContainer from './GoogleMapsContainer';
import Cart from './Cart';

class Landing extends Component {
	render() {
		return (
			<div>
				<SearchForm />
				<GoogleMapsContainer />
				<Cart />
			</div>
		);
	}
}

export default Landing;
