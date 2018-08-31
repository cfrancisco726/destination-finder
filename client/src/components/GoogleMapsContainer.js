import React, { Component } from 'react';
import {
	GoogleApiWrapper,
	Map,
	InfoWindow,
	Marker,
	GoogleMap
} from 'google-maps-react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ReactDOMServer from 'react-dom/server';
import { bindActionCreators } from 'redux';
import { addToTripList } from '../actions/index';

class GoogleMapsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {}
		};

		this.onMarkerClick = this.onMarkerClick.bind(this);
		this.onMapClick = this.onMapClick.bind(this);
		this.handleTrip = this.handleTrip.bind(this);
	}

	renderInfoWindow() {
		console.log('info');
		document.getElementById('buttonAdd').addEventListener('click', () => {
			console.log();
			this.handleTrip();
		});
	}

	handleTrip = () => {
		const trip = [
			{
				city: this.state.selectedPlace.city,
				state: this.state.selectedPlace.state,
				airport: this.state.selectedPlace.airport,
				price: this.state.selectedPlace.price,
				airline: this.state.selectedPlace.airline,
				departure_date: this.state.selectedPlace.departure_date,
				return_date: this.state.selectedPlace.return_date,
				origin: this.state.selectedPlace.origin
			}
		];
		console.log('handle', trip);
		this.props.addToTripList(trip);
	};

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});
		this.renderInfoWindow();
		console.log('markerClick');
	};
	onMapClick = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
		console.log('mapclick');
	};

	onInfoWindowClose = () => {
		this.setState({
			showingInfoWindow: false,
			activeMarker: null
		});
	};

	render() {
		const style = {
			width: '75vh',
			height: '50vh',
			marginLeft: 'auto',
			marginRight: 'auto'
		};

		return (
			<div className="map-container">
				<Map
					item
					xs={12}
					style={style}
					google={this.props.google}
					onClick={this.onMapClick}
					zoom={2}
					initialCenter={{ lat: '41.850033', lng: '-87.6500523' }}
				>
					{this.props.trips.map(trip => (
						<Marker
							key={trip.id}
							title={trip.city}
							city={trip.city}
							state={trip.state}
							country={trip.country}
							airport={trip.airport}
							price={trip.price}
							airline={trip.airline}
							origin={trip.origin}
							departure_date={trip.departure_date}
							return_date={trip.return_date}
							position={{ lat: trip.lat, lng: trip.lng }}
							onClick={this.onMarkerClick}
						/>
					))}

					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onInfoWindowClose}
					>
						<div className="info">
							<p>destination</p>
							<p>city: {this.state.selectedPlace.city}</p>
							<p>state: {this.state.selectedPlace.state}</p>
							<p>airport: {this.state.selectedPlace.airport}</p>
							<p>price: {this.state.selectedPlace.price}</p>
							<p>airline: {this.state.selectedPlace.airline}</p>
							<p>departure_date: {this.state.selectedPlace.departure_date}</p>
							<p>return_date: {this.state.selectedPlace.return_date}</p>
							<p>origin: {this.state.selectedPlace.origin}</p>
							{console.log('state', this.state.selectedPlace)}
						</div>
						<Button id="buttonAdd" color="primary">
							save trip
						</Button>
					</InfoWindow>
				</Map>
			</div>
		);
	}
}

function mapStateToProps({ trips }) {
	return { trips };
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			addToTripList: addToTripList
		},
		dispatch
	);
}
export default connect(mapStateToProps, mapDispatchToProps)(
	GoogleApiWrapper({
		apiKey: 'AIzaSyCj0s2dIclgG_bAOMUq_8JDG5_9oqcvo4s'
	})(GoogleMapsContainer)
);
