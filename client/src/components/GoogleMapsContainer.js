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
			selectedPlace: {},
			saveButton: 'SAVE TRIP'
		};

		this.onMarkerClick = this.onMarkerClick.bind(this);
		this.onMapClick = this.onMapClick.bind(this);
		this.handleTrip = this.handleTrip.bind(this);
		this.onbuttonClick = this.onbuttonClick.bind(this);
	}

	renderInfoWindow() {
		document.getElementById('buttonAdd').addEventListener('click', () => {
			this.onbuttonClick();
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
		this.props.addToTripList(trip);
	};

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});
		this.renderInfoWindow();
	};
	onMapClick = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};

	onInfoWindowClose = () => {
		this.setState({
			showingInfoWindow: false,
			activeMarker: null,
			saveButton: 'SAVE TRIP'
		});
	};

	onbuttonClick = () => {
		this.setState({
			saveButton: 'Saved'
		});
	};

	render() {
		const style = {
			width: '100vh',
			height: '50%',
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
					zoom={3}
					initialCenter={{ lat: '41.850033', lng: '-87.6500523' }}
				>
					{!this.props.trips
						? ''
						: this.props.trips.map(trip => (
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
							<p>
								<b>DESTINATION</b>
							</p>
							<p>
								<b>City:</b> {this.state.selectedPlace.city}
							</p>
							<p>
								<b>State:</b> {this.state.selectedPlace.state}
							</p>
							<p>
								<b>Airport:</b> {this.state.selectedPlace.airport}
							</p>
							<p>
								<b>Price:</b> {this.state.selectedPlace.price}
							</p>
							<p>
								<b>Airline:</b> {this.state.selectedPlace.airline}
							</p>
							<p>
								<b>Departure_date:</b> {this.state.selectedPlace.departure_date}
							</p>
							<p>
								<b>Return_date:</b> {this.state.selectedPlace.return_date}
							</p>
							<p>
								<b>Origin:</b> {this.state.selectedPlace.origin}
							</p>
						</div>
						<Button id="buttonAdd" color="primary">
							{this.state.saveButton}
						</Button>
					</InfoWindow>
				</Map>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		trips: state.trips.trips
	};
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
		apiKey: process.env.REACT_APP_GOOGLEMAP
	})(GoogleMapsContainer)
);
