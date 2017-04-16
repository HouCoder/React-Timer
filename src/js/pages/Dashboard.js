import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <RaisedButton label="Primary" primary={true} />
            </div>
        );
    }
}

export default Dashboard;
