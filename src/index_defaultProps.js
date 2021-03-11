import React, { Component } from 'react';
import { render } from 'react-dom';

// const Welcome = (props) => (
//     <div>
//         <h1>Welcome {props.name.toUpperCase()}</h1>
//     </div>
// )

// Welcome.defaultProps = {
//     'name': 'Pradeep'
// }


class Welcome extends Component {
    static defaultProps = {
        'name': 'Pradeep'
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.props.name.toUpperCase()}</h1>
            </div>
        )
    }
}

render(<Welcome />, root);
// render(<Welcome name="Suma"/>, root);