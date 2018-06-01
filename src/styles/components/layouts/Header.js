import styled from 'styled-components';

import variables from '../../variables';

export const HeaderWrapper = styled.div`
	display: flex;
	justify-content: center;

	padding: 2rem 1rem;
`;

export const HeaderContent = styled.div`
	width: 100%;
	max-width: ${variables.rowWidth};
`;