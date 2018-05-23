import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Parses out query string params
function querystring(name, url = window.location.href) {
    name = name.replace(/[[]]/g, "\\$&");
    console.log('redired:', url);

    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
    const results = regex.exec(url);

    if (!results) {
        return null;
    }

    if (!results[2]) {
        return "";
    }

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// If the user is authenticated, load component. Else, redirect to home (if no redirect param is set)
export default ({ component: C, props: cProps, ...rest}) => {
    const redirect = querystring("redirect");
    return (
        <Route
            {...rest}
            render={props => 
                !cProps.isAuthenticated
                ? <C {...props} {...cProps} />
                : <Redirect to={redirect === "" || redirect === null ? "/" : redirect} />
            }
        />
    );
};