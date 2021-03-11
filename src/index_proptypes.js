import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';


const Welcome = (props) => (
    <div>
        <h1>Name: {props.name}</h1>
        <h1>Age: {props.age}</h1>
    </div>
)

Welcome.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

render(<Welcome name="Pradeep" age={30}/>, root);