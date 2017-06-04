import React from 'react'

import AddTODO from './dashboard/AddTODO'
import TODOList from './dashboard/TODOList'

class Dashboard extends React.Component {
    state = {
        TODOs: []
    }

    handleAddTODO = (todo) => {
        this.state.TODOs.push({
            id: Date.now(),
            value: todo,
        })

        // Call setState method to refresh the list
        this.setState({
            TODOs: this.state.TODOs
        })
    }

    render() {
        return (
            <div>
                <AddTODO handleAddTODO={this.handleAddTODO} />
                <TODOList TODOs={this.state.TODOs} />
            </div>
        )
    }
}

export default Dashboard
