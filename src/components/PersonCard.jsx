import React, { Component } from 'react';

// class component
// firstName, lastName, age, hairColor
export default class PersonCard extends Component {
	render() {
		const { firstName, lastName, age, hairColor } = this.props;
		return (
			<>
				<h1>
					{lastName}, {firstName}
				</h1>
				<p>Age: {age}</p>
				<p>Hair Color: {hairColor}</p>
			</>
		);
	}
}
