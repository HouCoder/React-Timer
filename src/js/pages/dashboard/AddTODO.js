import React from 'react'
import TextField from 'material-ui/TextField'

export default class addTODO extends React.Component {

    handleKeyPress = (event) => {
        let title = event.target.value

        // Pressed the Enter key
        if (event.charCode === 13 && title) {
            const newTODODetail = {
                id: Date.now(),
                title: title,
                isCompleted: false,
            }

            this.props.handleAddTODO(newTODODetail)

            // Clear typed text.
            event.target.value = null
        }
    }

    render() {
        return (
            <div>
                <TextField
                    hintText='Add what you want'
                    fullWidth={true}
                    onKeyPress={this.handleKeyPress}
                />
            </div>
        )
    }
}
