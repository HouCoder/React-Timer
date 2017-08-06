import React from 'react'

import AddTODO from './dashboard/AddTODO'
import {RemainingTODOs, FinishedTODOs} from './dashboard/TODOList'
import {getTODO} from '../model/localStorage'

class Dashboard extends React.Component {
    state = {
        TODOs: []
    }

    constructor(props) {
        super(props)

        let TODOs = getTODO();

        this.state = {
            TODOs
        }
    }

    handleAddTODO(newTODODetail) {
        this.state.TODOs.push(t stnewTODODetail)

        // Call setState method to refresh the list
        this.setState({
            TODOs: this.state.TODOs
        })

        // Store new TODOs in localStorage
        localStorage.setItem('TODOs', JSON.stringify(this.state.TODOs))
    }

    render() {
        return (
            <div className="o-container">
                <AddTODO handleAddTODO={this.handleAddTODO.bind(this)} />
                <RemainingTODOs TODOs={this.state.TODOs} />
                <FinishedTODOs TODOs={this.state.TODOs} />
            </div>
        )
    }
}

export default Dashboard
