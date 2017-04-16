import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Material-ui needs onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Layout from "./components/Layout";

const __app = document.getElementById('app');

const App = () => (
    <MuiThemeProvider>
        <Layout />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, __app);
