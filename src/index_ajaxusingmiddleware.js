//Async Operations multiple middlewares
import {
    createStore, applyMiddleware
} from 'redux';
import React, {
    Component
} from 'react';
import {
    render
} from 'react-dom';
import { Provider, connect } from 'react-redux';

import thunkMiddleware from 'redux-thunk'

////////////////////////////////////////////////////////////

const logMiddleware = ({ dispatch, getState }) => {
    return function (next) {
        return function (action) {
            console.log('logMiddleware action received:', action)
            return next(action)
        }
    }
}


////////////////////////////////////////////////////////////


const SAY = 'SAY';

const SpeakerReducer = (state = {
    message: 'Hello'
}, {
    type,
    message
}) => {
    switch (type) {
        case SAY:
            return {
                ...state,
                //message: action.message
                message
            }
        default:
            return state;
    }
}

const storeWithMiddleware = applyMiddleware(logMiddleware, thunkMiddleware)(createStore)
const store = storeWithMiddleware(SpeakerReducer);

////////////////////////////////////////////////////////

const MessageActionCreator = stateFromServer => {
    const { message } = stateFromServer;

    return ({
        type: SAY,
        message
    });
}

//Async Ajax implementation
const fetchMessage = () => dispatch => {
    return fetch('http://localhost:3001/api')
        .then(response => response.json())
        .then(json => dispatch(MessageActionCreator(json)))
}

const mapStateToProps = state => {
    const {
        message
    } = state;
    return {
        message
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSpeak: () => {
            dispatch(fetchMessage())
        }
    }
}
class Speaker extends Component {
    render() {
        return (
            <div className="container">
                <h1>Speaker says {this.props.message}</h1>
                <button onClick={this.props.onSpeak} className="btn btn-success">
                    Send Message
              </button>
            </div>
        )
    }
}
const SpeakerHOC = connect(mapStateToProps, mapDispatchToProps)(Speaker);

const App = () => (
    <div>
        <Provider store={store}>
            <SpeakerHOC />
        </Provider>
    </div>
);

render(<App />, root);