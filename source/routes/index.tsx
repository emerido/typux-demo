import * as React from 'react';
import {Route, IndexRoute, Redirect, browserHistory} from 'react-router'
import {Menu} from "../components/Menu";
import {App} from "../containers/App";


export const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Menu}/>
    </Route>
);

export const history = browserHistory;