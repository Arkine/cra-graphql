import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import {InMemoryCache} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import { Router } from 'react-router-dom';

import Routes from './Routes';
import { history } from '../server/store';

import { App } from '../common/components/pages';
import { InMemoryCache } from 'apollo-client-preset';

const cache = InMemoryCache();

const client = new ApolloClient({
	uri: 'http://localhost:7777/graphql'
});

const childProps = {
	// isAuthenticated: true // TODO: Use Passportjs authentication
}

ReactDOM.render((
	<ApolloProvider client={client}>
		<Router history={history}>
			<App>
				<Routes childProps={childProps} />
			</App>
		</Router>
	</ApolloProvider>
	),
	document.getElementById('root')
);
// registerServiceWorker();
