import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Layout extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    {this.props.children}
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    }
}
