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
import _ from 'lodash'

class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			originInput: '',
			dateInput: '',
			durationInput: '',
			anchorEl: null
		};

		this.onInputChange = this.onInputChange.bind(this);

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

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
		this.setState({ originInput: '', dateInput: '', durationInput: '' });
	}
	render() {
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);

		const cityList = _.sortBy(origins, ['city']).map(function(origin, i) {
			return (
				<MenuItem
					key={i}
					name={origin}
					value={origin.iata_code}
					onClick={this.onInputChange}
				>
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
								name: 'originInput',
								id: 'origin'
							}}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							{cityList}
						</Select>
					</FormControl>
					<input
						type="date"
						name="dateInput"
						placeholder="date xxxx-xx-xx"
						className=""
						value={this.state.dateInput}
						onChange={this.onInputChange}
					/>
					<input
						type="text"
						name="durationInput"
						placeholder="number of days"
						className=""
						value={this.state.durationInput}
						onChange={this.onInputChange}
					/>
					<span>
						<button type="submit">Submit</button>
					</span>
				</form>
			</div>
		);
	}
}

function MapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchTrip }, dispatch);
}

export default connect(null, MapDispatchToProps)(SearchForm);
