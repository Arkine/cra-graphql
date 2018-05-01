import { injectGlobal} from 'styled-components';

import normalize from 'styled-normalize';
import reset from 'styled-reset';

// Base styles
export default injectGlobal`
	${reset}
	${normalize}

	html {
		font-size: 20px;
	}

	h1 {
		// color: red;
	}

	section {
		padding: 2rem 1rem;
	}

	a {
		color: green;
	}
`;