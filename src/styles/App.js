import styled from 'styled-components';

import variables from './variables';

export const AppWrapper = styled.div`

`;

export const AppContent = styled.main`
	display: flex;
	justify-content: center;
`;

export const AppInner = styled.main`
	width: 100%;
	max-width: ${variables.rowWidth};
`;