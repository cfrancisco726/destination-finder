import React, { Component } from 'react';

class Map extends Component {
	render() {



    }
		return (
			<div ref="map"> className="google-map" style={style} loading map...</div>
		);
	}
}

export const ConnectedMap = connect(mapStateToProps)(Map);
