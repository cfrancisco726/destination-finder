import React, { Component } from 'react';
import SearchForm from './SearchForm';
import GoogleMapsContainer from './GoogleMapsContainer';
import TripList from './TripList';

class Landing extends Component {
  render() {
    return (
      <div>
        <p className="phrase">Your Next Vacation is a Budget Away</p>
        <SearchForm />

        <GoogleMapsContainer />
      </div>
    );
  }
}

export default Landing;
