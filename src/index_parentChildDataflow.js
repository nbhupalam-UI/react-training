//Data Flow
import React, { Component } from 'react';
import {
    render
} from 'react-dom';

//Master
class Employee extends Component {
    render() {
        const { id, name, age, status, address: { city } } = this.props;

        return (
            <div className="container">
                <h1>HR App</h1>
                <EmployeeDetails
                    id={id}
                    name={name}
                    city={city}
                    status={status}
                    age={age}
                />
            </div>);

    }
}
//Details
const EmployeeDetails = (props) => (
    <div className="card">
        <div className="card-header">
            Employee Details
     </div>
        <div className="card-body">
            <p className="card-text">{props.id}</p>
            <p className="card-text">{props.name}</p>
            <p className="card-text">{props.status ? "Working" : "Not Working"}</p>
            <p className="card-text">{props.city}</p>
            <p className="card-text">{props.age}</p>
        </div>
    </div>
)



render(<Employee
    id={1}
    name="Pradeep"
    age={27}
    status={true}
    address={
        {
            city: 'Hyderabad'
        }
    }
/>, root);