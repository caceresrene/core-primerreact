import { useState } from 'react';
import styled from 'styled-components';
import ColorBlock from './ColorBlock';
import NavColor from './NavColor';

const StyledSection = styled.section`
	margin-top: 1rem;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1rem;
`;

const GeneradorDeCaja = () => {
	const [colors, setColors] = useState([]);
	return (
		<>
			<NavColor setColors={setColors} />
			<StyledSection>
				{colors.map((color, index) => (
					<ColorBlock color={color} key={index} />
				))}
			</StyledSection>
		</>
	);
};

export default GeneradorDeCaja;
