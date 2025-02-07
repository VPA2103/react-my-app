import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'job1', title: 'Deverlopers', salary: '500' },
            { id: 'job2', title: 'Testers', salary: '400' },
            { id: 'job3', title: 'Programer', salary: '1000' },

        ]
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

                <ChildComponent
                    name={this.state.firstName}
                    age={'26'}
                    address={'ho chi minh'}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}


export default MyComponent