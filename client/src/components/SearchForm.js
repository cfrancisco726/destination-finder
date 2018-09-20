import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrip } from '../actions/index';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import origins from '../origins';
import TextField from '@material-ui/core/TextField';
import _ from 'lodash';

class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			originInput: '',
			dateInput: '',
			durationInput: ''
		};

		this.onInputChange = this.onInputChange.bind(this);

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		const trip = [
			{
				origin: this.state.originInput,
				date: this.state.dateInput,
				duration: this.state.durationInput
			}
		];
		this.props.fetchTrip(trip);
		this.setState({
			originInput: '',
			dateInput: '',
			durationInput: ''
		});
	}
	render() {
		const cityList = _.sortBy(origins, ['city']).map(function(origin, i) {
			return (
				<MenuItem key={i} value={origin.iata_code} onClick={this.onInputChange}>
					{origin.city}
				</MenuItem>
			);
		}, this);

		return (
			<div className="searchForm">
				<form onSubmit={this.onFormSubmit}>
					<FormControl>
						<InputLabel htmlFor="origin">Origin</InputLabel>
						<Select
							value={this.state.originInput}
							onChange={this.onInputChange}
							inputProps={{
								name: 'originInput'
							}}
							className="originForm"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							{cityList}
						</Select>
					</FormControl>
					<FormControl>
						<div className="dateForm">
							<TextField
								type="date"
								name="dateInput"
								placeholder="date xxxx-xx-xx"
								value={this.state.dateInput}
								onChange={this.onInputChange}
							/>
						</div>
						<FormHelperText id="name-error-text">
							{this.props.msg}
						</FormHelperText>
					</FormControl>

					<FormControl>
						<div className="durationForm">
							<TextField
								type="text"
								name="durationInput"
								placeholder="number of days"
								value={this.state.durationInput}
								onChange={this.onInputChange}
							/>
						</div>
					</FormControl>

					<span className="submitButton">
						<button  type="submit">
							Submit
						</button>
					</span>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		msg: state.trips.msg
	};
}

function MapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchTrip }, dispatch);
}

export default connect(mapStateToProps, MapDispatchToProps)(SearchForm);
