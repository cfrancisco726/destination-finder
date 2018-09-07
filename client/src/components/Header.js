import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap';

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
<<<<<<< HEAD
			<div>
				<ul className="nav">
					<li className="log">
						<Link to={'/'}>
							<img
								src={require('../images/logo.jpg')}
								alt="about"
								width="20%"
							/>
						</Link>
					</li>
					<li>
						<Link to={'/trips'}>saved trips</Link>
					</li>
					<li >{this.renderContent()}</li>
				</ul>
			</div>
=======
			<Navbar inverse fixedTop className="header">
				<Navbar.Header>
					<Navbar.Brand>
						<a href={'/'} className="navbar-brand">
							<img
								src={require('../images/logo.jpg')}
								alt="about"
								width="30%"
							/>
						</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} href="/trips">
							saved Trips
						</NavItem>
						<NavItem eventKey={2}>{this.renderContent()}</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
>>>>>>> b27375fb7858363987ab2704e91642f9f67891d6
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
