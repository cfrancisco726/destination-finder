import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
			<div>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="title" color="inherit">
							<Link to={'/'} className="navbar-brand">
								Destination Finder
							</Link>
							<ul>
								<li>{this.renderContent()}</li>
							</ul>
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
