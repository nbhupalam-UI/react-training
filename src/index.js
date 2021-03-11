import React, { Component } from 'react';
import { render } from 'react-dom';

class Counter extends Component {
    state = {
        counter: 0
    }

    increment = () => {
        let counter = this.state.counter + 1;
        this.setState({ counter });
    }

    render() {
        return (
            <div>
                <p>Counter Value {this.state.counter}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

render(<Counter />, root);