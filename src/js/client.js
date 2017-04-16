import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from "./components/Layout";

const __app = document.getElementById('app');

const App = () => (
    <MuiThemeProvider>
        <Layout />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, __app);
