import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Router } from 'react-router-dom';

import Routes from './Routes';

import { history } from '../server/store';

import { App } from '../common/components/pages';

import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
	link: new HttpLink({
		uri: 'http://localhost:7777/graphql'
	}),
	cache: new InMemoryCache()
});

const childProps = {
	isAuthenticated: false
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
registerServiceWorker();
