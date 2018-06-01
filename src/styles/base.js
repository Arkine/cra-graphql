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

	body {
	}

	h1, h2, h3, h4, h5, h6 {

	}

	h1 {
		// color: red;
	}

	a {
		color: green;
		text-decoration: none;

		&:hover {
			
		}
	}


`;