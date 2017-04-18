import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Material-ui needs onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

const __app = document.getElementById('app');

const App = () => (
    <MuiThemeProvider>
        <Layout />
    </MuiThemeProvider>
);

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={App}/>
			<Route path="/about" component={Dashboard}/>
		</div>
	</Router>
, __app);
