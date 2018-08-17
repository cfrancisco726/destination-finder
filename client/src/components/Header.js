import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<div>
						<li>
							<a href="/auth/google">Login with Google</a>
						</li>
					</div>
				);
			default:
				return (
					<div>
					<li>
						<a href="/api/logout">Logout</a>
					</li>
					</div>
				);
		}
	}
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link to={'/'} className="left brand-logo">
						Destination Finder
					</Link>
					<ul className="right">
						<li>{this.renderContent()}</li>
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
