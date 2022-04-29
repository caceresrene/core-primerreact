import { useReducer } from 'react';

// estado inicial del reducer
const initialState = {
	firstName: {
		value: '',
		error: null,
	},
	lastName: {
		value: '',
		error: null,
	},
	email: {
		value: '',
		error: null,
	},
};

// validar los correso con regex (sacado tal cual de internet xd)
function ValidateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
		return true;
	}
	return false;
}

// validaciones para mostrar errores en estado del reducer
const validations = (key, value) => {
	let error = null;
	if (key === 'firstName' && value.length <= 2) {
		error = 'First name should be longer than 2 characters';
	}
	if (key === 'lastName' && value.length <= 2) {
		error = 'Last name should be longer than 2 characters';
	}
	if (key === 'email' && !ValidateEmail(value)) {
		// cuando sea un correo correcto devuelve true, pero si es true entra en el if, por eso lo negamos con un ! para que devuelva false enves de true y true enves de false
		error = 'Invalid email';
	}
	console.log(key, error);
	return error; // devuelve null si no hay ningun error
};

const reducer = (state, action) => {
  // dependiendo del tipo de accion puedes poner para hacer cosas distintas
	switch (action.type) {
		case 'update':
			return {
				...state,
				[action.key]: {
					// ...state[action.key], // se hubiera usado esto si se quiziera mantener los valores previos
					error: validations(action.key, action.value),
					value: action.value,
				},
			};
		default:
			return state;
	}
};

const FormReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const handleChange = (e) =>
		dispatch({
			type: 'update',
			value: e.target.value,
			key: e.target.name, // como mi name de input es igual que el de mis initialState puedo hacer esto
		});

	return (
		<form>
			<div>
				<label htmlFor='firstName'>First Name</label>
				<br />
				<input
					type='text'
					name='firstName'
					id='firstName'
					value={state.firstName.value}
					onChange={handleChange}
				/>
				<br />
				{state.firstName.error}
			</div>
			<div>
				<label htmlFor='lastName'>Last Name</label>
				<br />
				<input
					type='text'
					name='lastName'
					id='lastName'
					value={state.lastName.value}
					onChange={handleChange}
				/>
				<br />
				{state.lastName.error}
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<br />
				<input
					type='email'
					name='email'
					id='email'
					value={state.email.value}
					onChange={handleChange}
				/>
				<br />
				{state.email.error}
			</div>
			<input type='submit' value='Submit' />
		</form>
	);
};

export default FormReducer;
