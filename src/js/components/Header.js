import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div>
                <AppBar
                    title='W3C-Scout'
                    iconClassNameRight='muidocs-icon-navigation-expand-more'
                    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                />
                <Drawer open={this.state.open}>
                    <MenuItem>Dashboard</MenuItem>
                    <MenuItem>Setting</MenuItem>
                    <MenuItem>Sign out</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default Header;
