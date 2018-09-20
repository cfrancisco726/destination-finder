import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return <a href="/auth/google">LOGIN WITH GOOGLE</a>;
			default:
				return <a href="/api/logout">LOGOUT</a>;
		}
	}
	render() {
		return (
			<div>
				<div className="header">
					<ul>
						<li>
							<a href="/trips">SAVED TRIPS</a>
						</li>
						<li>{this.renderContent()}</li>
					</ul>
				</div>
				<div className="nav">
					<a href="/" className="logo">
						<img
							src={require('../images/logo.jpg')}
							alt="about"
							width="250px"
						/>
					</a>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
