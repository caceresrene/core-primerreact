import React, { Component } from 'react';
import '../App.css';

// class component
// firstName, lastName, age, hairColor
export default class PersonCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			age: props.age,
		};
	}

	aumentarEdad = () => {
		this.setState({ age: (this.state.age += 1) });
	};

	render() {
		const { firstName, lastName, age, hairColor } = this.props;

		return (
			<div className='card'>
				<h1>
					{lastName}, {firstName}
				</h1>
				<p>Age: {this.state.age}</p>
				<p>Hair Color: {hairColor}</p>
				<button onClick={this.aumentarEdad} className='button'>
					Birthday Button for {firstName} {lastName}
				</button>
			</div>
		);
	}
}
