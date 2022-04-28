import PersonCard from './components/PersonCard';
import Form from './components/Form';
import './App.css';

function App() {
	return (
		<main className='container'>
			{/* <PersonCard
				lastName={'Doe'}
				firstName={'Jane'}
				age={45}
				hairColor={'Black'}
			/>
			<PersonCard
				lastName={'Smith'}
				firstName={'John'}
				age={88}
				hairColor={'Brown'}
			/>
			<PersonCard
				lastName={'Millard'}
				firstName={'Fillmore'}
				age={50}
				hairColor={'Brown'}
			/>
			<PersonCard
				lastName={'Smith'}
				firstName={'Maria'}
				age={62}
				hairColor={'Brown'}
			/> */}
			<Form />
		</main>
	);
}

export default App;
