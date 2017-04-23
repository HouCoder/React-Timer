import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Material-ui needs onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import Setting from './pages/Setting';

const __app = document.getElementById('app');

ReactDOM.render(
    <Router>
        <div>
            <Route component={Layout}>
                <Route path="/" component={Dashboard}/>
                <Route path="/setting" component={Setting}/>
            </Route>
        </div>
    </Router>
, __app);
