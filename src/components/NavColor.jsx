import { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	border: none;
	background-color: #e8e8e8;
	padding: 0.5rem;
	border-radius: 0.4rem;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
`;

const StyledButton = styled.button`
	padding: 0.45rem;
	background-color: white;
	border-style: solid;
	border-color: #e8e8e8;
	border-radius: 0.5rem;
	font-weight: bold;
	transition: all 0.3s ease;
	&:hover {
		background-color: #e8e8e8;
		cursor: pointer;
	}
`;

const StyledForm = styled.form`
	font-weight: bold;
`;

const NavColor = ({ setColors }) => {
	const [newColor, setNewColor] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (newColor) {
			// verificar que el color no sea ''
			setColors((prev) => [...prev, newColor]);
			setNewColor('');
		}
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<label htmlFor='color'>Color</label>
			<StyledInput
				type='text'
				name='color'
				id='color'
				value={newColor}
				onChange={(e) => setNewColor(e.target.value)}
			/>
			<StyledButton>Add</StyledButton>
		</StyledForm>
	);
};

export default NavColor;
