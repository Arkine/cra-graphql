import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';

import { history } from '../server/store';

import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import {
	App,
	HomePage,
	NotFound,
	EventsPage
} from '../common/components/pages';

import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
	link: new HttpLink({
		uri: 'http://localhost:7777/graphql'
	}),
	cache: new InMemoryCache()
});

ReactDOM.render((
	<ApolloProvider client={client}>
		<Router history={history}>
			<App>
				<Switch>

					<Route exact path="/" component={HomePage} />
					<Route exact path="/events" component={EventsPage} />

					<Route component={NotFound} />
				</Switch>
			</App>
		</Router>
	</ApolloProvider>
	),
	document.getElementById('root')
);
registerServiceWorker();
