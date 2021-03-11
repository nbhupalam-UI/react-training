//Data Flow
import React, { Component } from 'react';
import {
    render
} from 'react-dom';
import { EMPLOYEES } from './EmployeeMock'

//Master
class Employee extends Component {
    render() {
        return (
            <EmployeeDetails role="Developer" {...this.props} />
        );
    }
}
//Details
const EmployeeDetails = (props) => (
    <div className="card-body">
        <p className="card-text">{props.emp.id}</p>
        <p className="card-text">{props.emp.name}</p>
        <p className="card-text">{props.emp.status ? "Working" : "Not Working"}</p>
        <p className="card-text">{props.emp.address.city}</p>
        <SkillList skills={props.emp.skills} />
    </div>
)
//Skill List Compoent
const SkillList = (props) => (
    <div>
        <h3>Skills</h3>
        <ul>
            {
                props.skills.map(({ skillName }, index) => (<li key={index} >{skillName}</li>))
            }
        </ul>
    </div>
)

class Employees extends Component {
    render() {
        return (
            <div className="container">
                <h1>HR App</h1>
                <div className="card">
                    <div className="card-header">
                        Employee Details - {this.props.devrole}
                    </div>
                    {this.props.employees.map((employee, i) => <Employee emp={employee} key={i} />)}
                </div>
            </div>
        );
    }
}

render(<Employees employees={EMPLOYEES} devrole="UI Dev" />, root);