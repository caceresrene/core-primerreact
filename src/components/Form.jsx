import React, { useState } from 'react';
import '../App.css';

const Form = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const newUser = { firstName, lastName, password, email, confirmPassword };
	};

	return (
		<>
			<form className='flex-col' onSubmit={handleSubmit}>
				<div className='flex-col'>
					<label htmlFor='firstName'>First Name</label>
					<input
						className='input full-width'
						type='text'
						name='firstName'
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div className='flex-col'>
					<label htmlFor='lastName'>Last Name</label>
					<input
						className='input full-width'
						type='text'
						name='lastName'
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div className='flex-col'>
					<label htmlFor='email'>Email</label>
					<input
						className='input full-width'
						type='email'
						name='email'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='flex-col'>
					<label htmlFor='password'>Password</label>
					<input
						className='input full-width'
						type='password'
						name='password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='flex-col'>
					<label htmlFor='confirmPassword'>Confirm Password</label>
					<input
						className='input full-width'
						type='password'
						name='confirmPassword'
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
				<button className='button'>Submit</button>
			</form>
			<div>{firstName}</div>
			<div>{lastName}</div>
			<div>{email}</div>
			<div>{password}</div>
			<div>{confirmPassword}</div>
		</>
	);
};

export default Form;
