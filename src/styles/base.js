import styled, { injectGlobal } from 'styled-components';

// Base styles
export const BaseStyles = () => {
	injectGlobal`
		body {
			background-color: red;
		}
	`;
};

export const AppWrapper = styled.div`

`;