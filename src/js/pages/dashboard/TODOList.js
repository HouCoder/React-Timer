import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import Subheader from 'material-ui/Subheader';
import {getTODO, setTODO} from '../../model/localStorage'

export class RemainingTODOs extends React.Component {
    componentWillReceiveProps(newProps) {
        console.log(newProps)
    }

    handleOnCheck(isChecked, row) {
        setTODO(row.id, {
            isCompleted: isChecked,
        });
    }

    render() {
        return (
            <List>
                <Subheader>Remaining TODOs</Subheader>
                {
                    this.props.TODOs.map((row) => {
                        if (!row.isCompleted) {
                            return (
                                <ListItem key={row.id}
                                    leftCheckbox={<Checkbox onCheck={(event, isChecked) => this.handleOnCheck(isChecked, row)} />}
                                    primaryText={row.title}
                                />
                            )
                        }
                    })
                }
            </List>
        )
    }
}

export class FinishedTODOs extends React.Component {
    render() {
        return (
            <List>
                <Subheader>Finished TODOs</Subheader>
                {
                    this.props.TODOs.map((row) => {
                        if (row.isCompleted) {
                            return (
                                <ListItem key={row.id}
                                    leftCheckbox={<Checkbox onClick={(e) => {e.stopPropagation()} } />}
                                    primaryText={row.title}
                                />
                            )
                        }
                    })
                }
            </List>
        )
    }
}
