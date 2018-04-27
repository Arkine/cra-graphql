import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from '../common/reducers';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);