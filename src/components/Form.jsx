import React, { useState } from 'react';
import '../App.css';

const Form = () => {
	const [firstName, setFirstName] = useState('');
	const [errorFirstName, setErrorFirstName] = useState('');

	const [lastName, setLastName] = useState('');
	const [errorLastName, setErrorLastName] = useState('');

	const [email, setEmail] = useState('');
	const [errorEmail, setErrorEmail] = useState('');

	const [password, setPassword] = useState('');
	const [errorPassword, setErrorPassword] = useState('');

	const [confirmPassword, setConfirmPassword] = useState('');
	const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		!(firstName >= 2) &&
			setErrorFirstName('First name should be longer than 2 characters');
		!(lastName >= 2) &&
			setErrorLastName('Last name should be longer than 2 characters');
		!(email >= 5) && setErrorEmail('Email should be longer than 5 characters');
		!(password >= 8) &&
			setErrorPassword('Password should be 8 characters or longer');
		!(password === confirmPassword) &&
			setErrorConfirmPassword("Passwords don't match");
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
						value={firstName}
					/>
					{errorFirstName}
				</div>
				<div className='flex-col'>
					<label htmlFor='lastName'>Last Name</label>
					<input
						className='input full-width'
						type='text'
						name='lastName'
						onChange={(e) => setLastName(e.target.value)}
						value={lastName}
					/>
					{errorLastName}
				</div>
				<div className='flex-col'>
					<label htmlFor='email'>Email</label>
					<input
						className='input full-width'
						type='email'
						name='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					{errorEmail}
				</div>
				<div className='flex-col'>
					<label htmlFor='password'>Password</label>
					<input
						className='input full-width'
						type='password'
						name='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
					{errorPassword}
				</div>
				<div className='flex-col'>
					<label htmlFor='confirmPassword'>Confirm Password</label>
					<input
						className='input full-width'
						type='password'
						name='confirmPassword'
						onChange={(e) => setConfirmPassword(e.target.value)}
						value={confirmPassword}
					/>
					{errorConfirmPassword}
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
