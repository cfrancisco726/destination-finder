import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, getCart } from '../actions/index';

class Cart extends Component {
	render() {
		return <div>{this.props.cart}</div>;
	}
}

function mapStateToProps({ cart }) {
	return {
		cart
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			addToCart: addToCart,
			getCart: getCart
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
