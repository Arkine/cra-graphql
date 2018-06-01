import styled from 'styled-components';

import variables from '../../variables';

export const PrimaryNavigationContainer = styled.div`
	display: flex;
	justify-content: flex-end;

	background-color: #ccc;

	a {
		display: inline-block;

		padding: 1rem;
	}
`;

export const PrimaryNavigationContent = styled.div`
	width: 100%;
	max-width: ${variables.rowWidth};
`;