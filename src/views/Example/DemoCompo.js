import React from 'react';
import ChildCompo from './ChildCompo';
import AddFormCompo from './AddFormCompo';


class DemoCompo extends React.Component {

    //key: value, content thay doi do bien state thay doi

    state = {
        arrJob: [
            { id: 'HE151447', title: 'Dev', salary: '500' },
            { id: 'HE151317', title: 'Testers', salary: '400' },
            { id: 'HE151567', title: 'PM', salary: '1000' }
        ]
    }
    /**
     * JSX => return block
     */

    addNew = (job) => {
        // let currentJobs = this.state.arrJob
        //currentJobs.push(job)

        this.setState({
            arrJob: [...this.state.arrJob, job]
        })

        console.log('Check from parent: ', job)
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJob
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJob: currentJobs
        })
    }

    componentDidUpdate(prevprops, prevstate) {
        console.log('>>> run didupdate: ', 'prevstate: ', prevstate, 'current state: ', this.state)
    }

    componentDidMount() {
        console.log('>>> Component did mount')
    }

    //re-render
    render() {
        console.log('>>> Call reder', this.state)
        return (
            <>
                <AddFormCompo
                    addNew={this.addNew}
                />

                <ChildCompo
                    arrJob={this.state.arrJob}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default DemoCompo;