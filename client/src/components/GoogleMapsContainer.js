import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import { connect } from 'react-redux';

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
	}
	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});
	};
	onMapClick = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};

	mapRender = () => {
		const mapList = this.props.trips;
		console.log(mapList);
		return mapList.map(trip => {
			<div>
				<Marker
					onClick={this.onMarkerClick}
					title={'Changing Colors Garage'}
					position={{ lat: trip.tripLat, lng: trip.tripLon }}
					name={trip.tripCity}
				/>
				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showingInfoWindow}
				>
					<div>
						<p>airport: {trip.tripName}</p>
						<p>city: {trip.tripCity}</p>
						<p>departure date: {trip.departure_date}</p>
						<p>return date: {trip.return_date}</p>
						<p>price: {trip.price}</p>
						<p>airline: {trip.airline}</p>
					</div>
				</InfoWindow>
			</div>;
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
			<div>
				<Map
					item
					xs={12}
					style={style}
					google={this.props.google}
					onClick={this.onMapClick}
					zoom={3}
					initialCenter={{ lat: '41.850033', lng: '-87.6500523' }}
				>
					{console.log('trip', this.props.trips)}

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
						</div>
					</InfoWindow>
				</Map>
			</div>
		);
	}
}

function mapStateToProps({ trips }) {
	return { trips };
}

export default connect(mapStateToProps)(
	GoogleApiWrapper({
		apiKey: process.env.GOOGLE_MAP
	})(GoogleMapsContainer)
);
