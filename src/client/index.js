import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';

import { store, history } from '../server/store';

// import HomePage from '../common/components/pages/HomePage';
// import NotFound from '../common/components/pages/NotFound';
import {
	App,
	HomePage,
	NotFound,
	EventsPage
} from '../common/components/pages';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<Provider store={store}>
		<Router history={history}>
			<App>
				<Switch>

					<Route exact path="/" component={HomePage} />
					<Route exact path="/events" component={EventsPage} />

					<Route component={NotFound} />
				</Switch>
			</App>
		</Router>
	</Provider>
	),
	document.getElementById('root')
);
registerServiceWorker();
