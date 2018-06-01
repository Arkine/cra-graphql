import styled from 'styled-components';

import variables from '../../variables';

export const Wrapper = styled.div`
	background-color: #eee;

	width: 100%;
	max-width: ${variables.rowWidth};
`;

export const NavWrapper = styled.nav`

	a {
		padding: 1rem;
	}
`;