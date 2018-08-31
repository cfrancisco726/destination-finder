import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrip } from '../actions/index';
import {
	MenuItem,
	Form,
	Well,
	Panel,
	FormControl,
	FormGroup,
	ControlLabel,
	Button,
	InputGroup,
	DropdownButton,
	Image,
	Col,
	Row
} from 'react-bootstrap';
import _ from 'lodash';

const origins = [
	{ city: 'New York', state: 'New York', iata_code: 'NYC' },
	{ city: 'Charleston', state: 'South Carolina', iata_code: 'CHS' },
	{ city: 'Las Vegas', state: 'Nevada', iata_code: 'LAS' },
	{ city: 'Seattle', state: 'New York', iata_code: 'SEA' },
	{ city: 'Chicago', state: 'Illinois', iata_code: 'CHI' },
	{ city: 'San Francisco', state: 'California', iata_code: 'SFO' },
	{ city: 'Washington', state: 'DC', iata_code: 'IAD' },
	{ city: 'New Orleans', state: 'Louisiana', iata_code: 'MSY' },
	{ city: 'Orlando', state: 'Florida', iata_code: 'ORL' },
	{ city: 'Miami', state: 'Florida', iata_code: 'MIA' },
	{ city: 'Atlanta', state: 'Georgia', iata_code: 'ATL' },
	{ city: 'Los Angeles', state: 'California', iata_code: 'LAX' },
	{ city: 'San Diego', state: 'California', iata_code: 'SAN' },
	{ city: 'Philadelphia', state: 'Pennsylvania', iata_code: 'PHD' },
	{ city: 'Houston', state: 'Texas', iata_code: 'HOU' },
	{ city: 'Dallas', state: 'Texas', iata_code: 'DFW' },
	{ city: 'Denver', state: 'Colorado', iata_code: 'DEN' },
	{ city: 'Phoenix', state: 'Arizona', iata_code: 'PHX' },
	{ city: 'San Antonio', state: 'Texas', iata_code: 'SVZ' },
	{ city: 'San Jose', state: 'California', iata_code: 'SJC' },
	{ city: 'Austin', state: 'Texas', iata_code: 'ASQ' },
	{ city: 'Jacksonville', state: 'Florida', iata_code: 'JAX' },
	{ city: 'Indianapolis', state: 'Indiana', iata_code: 'IND' },
	{ city: 'Columbus', state: 'Ohio', iata_code: 'OLU' },
	{ city: 'Charlotte', state: 'North Carolina', iata_code: 'CLT' },
	{ city: 'Detroit', state: 'Michigan', iata_code: 'DTT' },
	{ city: 'Memphis', state: 'Tennessee', iata_code: 'MEM' },
	{ city: 'Nashville', state: 'Tennessee', iata_code: 'BNA' },
	{ city: 'Baltimore', state: 'Maryland', iata_code: 'BWI' },
	{ city: 'Oklahoma City', state: 'Oklahoma', iata_code: 'OKC' },
	{ city: 'Portland', state: 'Oregon', iata_code: 'PDX' },
	{ city: 'Milwaukee', state: 'Wisconsin', iata_code: 'MKE' },
	{ city: 'Albuquerque', state: 'New Mexico', iata_code: 'ABQ' },
	{ city: 'Sacramento', state: 'California', iata_code: 'SAC' },
	{ city: 'Kansas City', state: 'Missouri', iata_code: 'MKC' },
	{ city: 'Omaha', state: 'Nebraska', iata_code: 'OMA' },
	{ city: 'Raleigh', state: 'North Carolina', iata_code: 'RDU' },
	{ city: 'Cleveland', state: 'Ohio', iata_code: 'CLE' }
];

class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			origin: '',
			duration: '',
			date: '',
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
				origin: this.state.origin,
				date: this.state.date,
				duration: this.state.duration
			}
		];
		this.props.fetchTrip(trip);
		this.setState({ origin: '', date: '', duration: '' });
	}

	render() {
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);

		const cityList = _.sortBy(origins, ['city']).map(function(origin, i) {
			return (
				<MenuItem
					key={i}
					name={origin.iata_code}
					value={this.state.origin}
					onClick={this.onInputChange}
				>
					{origin.city}
				</MenuItem>
			);
		}, this);
		return (
			<div className="search-form">
				<Row className="search-row">
					<Form onSubmit={this.onFormSubmit}>
						<Col>
							<DropdownButton
								bsStyle="primary"
								title={!this.state.origin ? 'Origin' : this.state.orgin}
							>
								{cityList}
							</DropdownButton>
						</Col>
						<Col className="duration">
							<FormGroup>
								<FormControl
								bsStyle="primary"
								
									type="text"
									name="duration"
									placeholder="duration"
									className=""
									value={this.state.duration}
									onChange={this.onInputChange}
								/>
							</FormGroup>
						</Col>
						<Col>
							<Button type="submit">Submit</Button>
						</Col>
					</Form>
				</Row>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		msg: state.msg
	};
}

function MapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchTrip }, dispatch);
}

export default connect(mapStateToProps, MapDispatchToProps)(SearchForm);
