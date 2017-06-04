import React from 'react'
import TextField from 'material-ui/TextField'

export default class addTODO extends React.Component {
    handleKeyPress = (event) => {
        let value = event.target.value

        // Pressed the Enter key
        if (event.charCode === 13 && value) {
            this.props.handleAddTODO(value)

            // Clear typed text.
            event.target.value = null
        }
    }

    render() {
        return (
            <div>
                <TextField
                    hintText="Add a task"
                    fullWidth={true}
                    onKeyPress={this.handleKeyPress}
                />
            </div>
        )
    }
}
