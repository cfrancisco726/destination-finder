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
import ReactDOM from 'react-dom';
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
		// document.addEventListener('DOMContentLoaded', function () {
		var infoButton = document.getElementById('buttonAdd')
		// if (infoButton){
		infoButton.addEventListener('click', () => {
				this.onbuttonClick();
				this.handleTrip();
			});
		// }
		// });
	}

	onMapClick = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};

	onbuttonClick = () => {
		console.log('clicked')
		this.setState({
			saveButton: 'Saved'
		});
	};

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});
		// this.renderInfoWindow();
	};

	onInfoWindowOpen(props, e) {
		const button = (
			<Button 
			  color="primary"
			  onClick={e => {
				console.log("hmapbuttoni1");
				this.onbuttonClick();
			  	this.handleTrip();
			  }}
			>
			{this.state.saveButton}
			</Button>
		  );
		ReactDOM.render(
		React.Children.only(button),
		  document.getElementById("buttonAdd")
		);
	  }

	

	handleTrip = () => {
		const trip = [
			{
				city: this.state.selectedPlace.city,
				country: this.state.selectedPlace.country,
				price: this.state.selectedPlace.price,
				departureDate: this.state.selectedPlace.departureDate,
				returnDate: this.state.selectedPlace.returnDate,
				origin: this.state.selectedPlace.origin
			}
		];
		this.props.addToTripList(trip);
	};


	onInfoWindowClose = () => {
		this.setState({
			showingInfoWindow: false,
			activeMarker: null,
			saveButton: 'SAVE TRIP'
		});
	};



	render() {
		const style = {
			width: '90%',
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
					zoom={1.5}
					initialCenter={{ lat: '41.850033', lng: '-87.6500523' }}
				>
					{!this.props.trips
						? ''
						: this.props.trips.map(trip => (
								<Marker
									key={trip.id}
									title={trip.city}
									city={trip.city}
									country={trip.country}
									price={trip.price}
									origin={trip.origin}
									departureDate={trip.departureDate}
									returnDate={trip.returnDate}
									position={{ lat: trip.lat, lng: trip.lng }}
									onClick={this.onMarkerClick}
								/>
							))}

					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onOpen={e => {
							this.onInfoWindowOpen(this.props, e)
						}}
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
								<b>Country:</b> {this.state.selectedPlace.country}
							</p>
							<p>
								<b>Price:</b> {this.state.selectedPlace.price}
							</p>
							<p>
								<b>Departure_date:</b> {this.state.selectedPlace.departureDate}
							</p>
							<p>
								<b>Return_date:</b> {this.state.selectedPlace.returnDate}
							</p>
							<p>
								<b>Origin:</b> {this.state.selectedPlace.origin}
							</p>
						</div>
					<div id="buttonAdd"  />
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
