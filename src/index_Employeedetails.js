import React from 'react';
import { render } from 'react-dom';

const Employee = () => {
    let name = 'Pradeep';
    let id = 1;
    let status = true;
    let address = {
        'city': 'Hyderabad'
    };
    return (
        <div className="container">
            <div className="card">
            <h1 class="card-header">HR App</h1>
                <div className="card-header">
                    Employee Details
                </div>
                <div className="card-body">
                    <p className="card-text">Id: {id}</p>
                    <p className="card-text">Name: {name}</p>
                    <p className="card-text">{status ? 'Working': 'Not Working'}</p>
                    <p className="card-text">{address.city}</p>
                </div>
            </div>
        </div>
    )
}
render(<Employee />, root);