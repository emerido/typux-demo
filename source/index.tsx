import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router} from "react-router";
import {Provider} from "react-redux";

import {store} from "./store";
import {routes, history} from "./routes";

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={history} />
    </Provider>,
    document.getElementById('container')
);