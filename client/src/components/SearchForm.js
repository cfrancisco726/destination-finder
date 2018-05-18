import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDestination } from '../actions/index';

class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			originInput: '',
			dateInput: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.fetchDestination(this.state.originInput, this.state.dateInput);
		this.setState({
			originInput: '',
			dateInput: ''
		});
	}
	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					type="text"
					name="originInput"
					placeholder="origin"
					className=""
					value={this.state.originInput}
					onChange={this.onInputChange}
				/>
				<input
					type="text"
					name="dateInput"
					placeholder="date xxxx-xx-xx"
					className=""
					value={this.state.dateInput}
					onChange={this.onInputChange}
				/>
				<span>
					<button type="submit">Submit</button>
				</span>
			</form>
		);
	}
}

function MapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchDestination }, dispatch);
}

export default connect(null, MapDispatchToProps)(SearchForm);
