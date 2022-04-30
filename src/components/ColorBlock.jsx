import React from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
	background-color: ${(props) => props.color};
	height: 6rem;
	width: 6rem;
  border-radius: 0.5rem;
`;

const ColorBlock = ({color}) => {
	return <StyledBlock color={color}></StyledBlock>;
};

export default ColorBlock;
