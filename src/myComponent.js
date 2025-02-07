import React from "react";

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
    }


    handleOnChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleOnChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }


    clickMe = (event) => {

        alert('Hello ')
        console.log('check data ', this.state)
    }

    render() {
        return (
            <>
                <div>
                    <label>First Name</label>
                    <input value={this.state.firstName} type='text'
                        onChange={(event) => this.handleOnChangeFirstName(event)}
                    />
                </div>
                <div>
                    <label>Last Name</label>

                    <input value={this.state.lastName} type='text'
                        onChange={(event) => this.handleOnChangeLastName(event)}

                    />
                </div>
                <div>

                    <input type="button" value="Submit" onClick={(event) => { this.clickMe(event) }} />

                </div>
            </>
        )
    }
}


export default MyComponent