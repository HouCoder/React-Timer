import React from 'react'

import AddTODO from './dashboard/AddTODO'
import TODOList from './dashboard/TODOList'

class Dashboard extends React.Component {
    state = {
        TODOs: []
    }

    constructor(props) {
        super(props)

        let TODOs
        const existingTODOs = localStorage.getItem('TODOs')

        if (localStorage.getItem('TODOs')) {
            TODOs = JSON.parse(localStorage.getItem('TODOs'))
        } else {
            TODOs = []
        }

        this.state = {
            TODOs
        }
    }

    handleAddTODO(todo) {
        this.state.TODOs.push({
            id: Date.now(),
            value: todo,
        })

        // Call setState method to refresh the list
        this.setState({
            TODOs: this.state.TODOs
        })

        // Store new TODOs in localStorage
        localStorage.setItem('TODOs', JSON.stringify(this.state.TODOs))
    }

    render() {
        return (
            <div>
                <AddTODO handleAddTODO={this.handleAddTODO.bind(this)} />
                <TODOList TODOs={this.state.TODOs} />
            </div>
        )
    }
}

export default Dashboard
