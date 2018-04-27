import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';

import { store, history } from './server/store';
import App from './common/App';
import NotFound from './common/NotFound';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<Provider store={store}>
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={App} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	</Provider>
	),
	document.getElementById('root')
);
registerServiceWorker();
