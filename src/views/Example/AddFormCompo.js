import React from 'react';

class AddFormCompo extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleJobTitle = (event) => {
        this.setState({ title: event.target.value });
    }

    handleSalary = (event) => {
        this.setState({ salary: event.target.value });
    }

    handeleSubmit = (event) => {

        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            alert("Missing required input")
            return;
        }
        console.log('>>> check data: ', this.state);

        this.props.addNew({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job Title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleJobTitle(event)} />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleSalary(event)} />
                <br /><br />
                <input
                    type="button"
                    value="Submit"
                    onClick={(event) => this.handeleSubmit(event)} />
            </form>
        )
    }
}

export default AddFormCompo