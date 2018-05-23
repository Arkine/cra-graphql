import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// If the users is authenticated, load the component, else, send them to the login with a redirect param
export default ({ component: C, props: cProps, ...rest }) =>
    <Route
        {...rest}
        render={props => 
            cProps.isAuthenticated
            ? <C {...props} {...cProps} />
            : <Redirect to={`/login?redirect=${props.location.pathname}${props.location.search}`} />
        }
    />;