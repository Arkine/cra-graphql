import styled from 'styled-components';

import variables from '../../variables';

export const Wrapper = styled.div`
	background-color: #eee;
	padding: 1rem;
`;

export const Inner = styled.div`

	width: 100%;
	max-width: ${variables.rowWidth};
`;

export const NavWrapper = styled.nav`
	background-color: #ccc;

	a {
		display: inline-block;
		padding: 1rem;
	}
`;