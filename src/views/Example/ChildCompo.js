import React from 'react';
import './Demo.scss'

class ChildCompo extends React.Component {

    //re-render
    state = {
        showList: false
    }

    handleShowHide = () => {
        this.setState({
            showList: !this.state.showList
        })
    }

    handleDelete = (job) => {
        console.log('>>> check delete item: ', job)
        this.props.deleteJob(job)
    }

    render() {
        //console.log('>>> check props', this.props)

        //let { name, age, address, arrJob } = this.props;

        let { arrJob } = this.props;
        let { showList } = this.state;
        let check = showList === true ? 'showList: true' : 'showList: false';
        console.log('>>> check condition: ', check);


        return (
            <>
                {/* <div>i am {name} - {age} years old - {address}</div> */}

                {showList === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()} className='btn-show'>Show</button>
                    </div>
                    :
                    <>
                        <div className="jobList">
                            {
                                arrJob.map((item, index) => {
                                    return (
                                        <div key={item.id} >
                                            {item.title} - {item.salary}$
                                            <></> <button onClick={() => this.handleDelete(item)} >Dele</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()} className='btn-hide'>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildCompo = (props) => {
//     let { arrJob } = props;

//     return (
//         <>
//             <div className="jobList">
//                 {
//                     arrJob.map((item, index) => {
//                         if (item.title >= 15) {
//                             return (
//                                 <div key={item.id} >
//                                     {item.study} - K{item.title}
//                                 </div>
//                             )
//                         }
//                     })
//                 }

//             </div>
//         </>
//     )
// }

export default ChildCompo;