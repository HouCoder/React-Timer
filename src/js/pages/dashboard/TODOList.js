import React from 'react'
import {List, ListItem} from 'material-ui/List'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import Checkbox from 'material-ui/Checkbox'
import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors'

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
    <MoreVertIcon color={grey400} />
  </IconButton>
)

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
)

export default class TODOList extends React.Component {
    openDetail(event) {
        event.stopPropagation()
        event.preventDefault()
    }

    render = () => {
        return (
            <List>
                {
                    this.props.TODOs.map((row) => {
                        return (
                            <ListItem key={row.id}
                                leftCheckbox={<Checkbox onClick={(e) => {e.stopPropagation()} } />}
                                onClick={this.openDetail}
                                rightIconButton={rightIconMenu}
                                primaryText={row.value}
                            />
                        )
                    })
                }
            </List>
        )
    }
}
