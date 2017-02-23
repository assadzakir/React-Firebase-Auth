/**
 * Created by Anonmous on 2/23/2017.
 */

import React from 'react';
import { Route, Router } from 'react-router'
import App from '../../containers/app/app'
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';


// const syncedHistory = syncHistoryWithStore(browserHistory);

export default function Root() {
    return (
            <Router history={browserHistory}>
                <Route path='/' component={App}>
                </Route>
            </Router>
    );
}