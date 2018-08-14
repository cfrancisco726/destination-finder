import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import TripField from './TripField';
import { Link } from 'react-router-dom';
import * as actions from '../actions/index';

const FIELDS = [
	{ label: 'Origin', name: 'originInput' },
	{ label: 'Departure Date', name: 'dateInput' },
	{ label: 'Duration', name: 'durationInput' }
];

class TripForm extends Component {
	renderFields() {
		return _.map(FIELDS, ({ label, name }) => {
			return (
				<Field
					key={name}
					component={TripField}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}
	render() {
		return (
			<div>
			<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
			
					{this.renderFields()}
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	_.each(FIELDS, ({ name }) => {
		if (!values[name]) {
			errors[name] = 'You must provide a value';
		}
	});
	return errors;
}

export default reduxForm({
	validate,
	form: 'tripForm'
})(TripForm);
