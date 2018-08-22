import React, { Component } from 'react';
import { GoogleApiWrapper, GoogleMap, Map, Marker } from 'google-maps-react';
import ReactDOMServer from 'react-dom/server';

class InfoWindow extends Component {
	componentDidUpdate(prevProps, prevState) {
		if (this.props.map !== prevProps.map) {
			this.renderInfoWindow();
		}

		if (this.props.visible !== prevProps.visible) {
			this.props.visible ? this.openWindow() : this.closeWindow();
		}
		if (this.props.children !== prevProps.children) {
			this.updateContent();
		}
	}

	openWindow() {
		this.infowindow.open(this.props.map, this.props.marker);
	}
	closeWindow() {
		this.infowindow.close();
	}
	updateContent() {
		const content = this.renderChildren();
		this.infowindow.setContent(content);
	}
	renderChildren() {
		const { children } = this.props;
		return ReactDOMServer.renderToString(children);
	}
	renderInfoWindow() {
		let { map, google, mapCenter } = this.props;
		const iw = (this.infowindow = new google.maps.InfoWindow({
			content: '<'
		}));
		google.maps.event.addListener(iw, 'closeclick', this.onClose.bind(this));
		google.maps.event.addListener(
			iw,
			'domready',
			this.onOpen.bind(this),
			() => {
				var buttonCart = document.getElementById('buttonCart');
				buttonCart.addEventListener('click', () => {
					this.handlecart.bind(this);
				});
			}
		);
		// google.maps.event.addListener(iw, 'domready', this.onOpen.bind(this));
	}
	onOpen() {
		if (this.props.onOpen) this.props.onOpen();
	}
	onClose() {
		if (this.props.onClose) this.props.onClose();
	}

	handleCart = () => {
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
		this.props.addToCart(trip);
	};
	render() {
		return null;
	}
}

export default InfoWindow;
