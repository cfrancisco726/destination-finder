import React, { Component } from 'react';
import SearchForm from './SearchForm';
import TripForm from './TripForm';
import TempList from './TempList';
import Test from './Test';

class Landing extends Component {
	render() {
		return (
			<div>
				<h1 className="card-panel teal lighten-2">Landing</h1>
				<SearchForm />
				<Test />
			</div>
		);
	}
}

export default Landing;
