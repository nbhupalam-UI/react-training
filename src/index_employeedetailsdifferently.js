import React, {Component} from 'react';
import {render} from 'react-dom';


// class Employee extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <h1>Employee</h1>
//                 <p>Employee Name : {this.props.name}</p>
//                 <p>Employee Age : {this.props.age}</p>
//                 <p>Employee is  {this.props.status ? 'Working': 'not working'}</p>
//             </div>
//         )
//     }
// }

// const Employee = (props) => {
//     return (
//         <div className="container">
//             <h1>Employee</h1>
//             <p>Employee Name : {props.name}</p>
//             <p>Employee Age : {props.age}</p>
//             <p>Employee is  {props.status ? 'Working': 'not working'}</p>
//         </div>
//     )
// }

// class Employee extends Component {
//     render() {
//         const {name, age, status} = this.props;
//         return (
//             <div className="container">
//                 <h1>Employee</h1>
//                 <p>Employee Name : {name}</p>
//                 <p>Employee Age : {age}</p>
//                 <p>Employee is  {status ? 'Working': 'not working'}</p>
//             </div>
//         )
//     }
// }

const Employee = ({name, age, status}) => {
    return (
        <div className="container">
            <h1>Employee</h1>
            <p>Employee Name : {name}</p>
            <p>Employee Age : {age}</p>
            <p>Employee is  {status ? 'Working': 'not working'}</p>
        </div>
    )
}

render(<Employee name="Pradeep" age={26} status={true}/>, root);