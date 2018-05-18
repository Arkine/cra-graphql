import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import AppliedRoute from './AppliedRoute';
import UnathenticatedRoute from './UnauthenticatedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';

import {
    HomePage,
    NotFound,
    EventsPage,
    SingleEventPage,
    LoginPage
} from '../common/components/pages';

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute exact path="/" component={HomePage} props={childProps}/>
        <AuthenticatedRoute exact path="/events" component={EventsPage} props={childProps} />
        <AuthenticatedRoute exact path="/events/:id" component={SingleEventPage} props={childProps} />
        <UnathenticatedRoute exact path="/login" component={LoginPage} props={childProps}/>
        <AppliedRoute component={NotFound} props={childProps}/>
    </Switch>