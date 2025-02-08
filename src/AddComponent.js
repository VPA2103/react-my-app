import React from "react";

class AddComponent extends React.Component{

state={
    
}


    handleOnChangetitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        if(!this.state.title || !this.state.salary){
            alert('Missing required params')
            return
        }
        console.log('check data ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random()*101),
            title: this.state.title,
            salary:this.state.salary
        })

        this.setState({
            title:'',
            salary:''
        })
    }
    render(){

        return(
            <>
            <div>
                    <label>Job Title: </label>
                    <input value={this.state.titleJob} type='text'
                        onChange={(event) => this.handleOnChangetitleJob(event)}
                    />
                </div>
                <div>
                    <label>Salary: </label>

                    <input value={this.state.salary} type='text'
                        onChange={(event) => this.handleOnChangesalary(event)}

                    />
                </div>
                <div>
                    <input type="button" value="Submit" onClick={(event) => { this.handleSubmit(event) }} />

                </div>
            </>
        )

    }

}

export default AddComponent;