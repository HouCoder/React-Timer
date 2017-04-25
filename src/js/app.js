import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Material-ui needs onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import Footer from './components/Footer';

import Dashboard from './pages/Dashboard';
import Setting from './pages/Setting';

const __app = document.getElementById('app');

const App = () => (
    <BrowserRouter>
        <MuiThemeProvider>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/setting" component={Setting}/>
                </Switch>
                <Footer/>
            </div>
        </MuiThemeProvider>
    </BrowserRouter>
);


ReactDOM.render( <App/>, __app);
