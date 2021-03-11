//Async Operations using thunk middleware
import { createStore, applyMiddleware } from 'redux';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import './App.css';

const SAY = 'SAY';

const SpeakerReducer = (state = {
    message: ''
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

const storeWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = storeWithMiddleware(SpeakerReducer);

const SPEAK_ACTIONCREATOR = message => {
    /* 
       return {
           type:'SAY',
           message
       } */
      /*  setTimeout(function () {
           return {
               type: SAY,
               message
           }
       }, 2000) */
       return function (dispatch) {
           setTimeout(function () {
               dispatch({
                   type: SAY,
                   message
               })
           }, 1000)
       }
       
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
        onSpeak: () => dispatch(SPEAK_ACTIONCREATOR('Welcome'))
    }
}
class Speaker extends Component {
    render() {
        console.log(this.props);

        return (
            <div className="container">
                <h1>Speaker says {this.props.message}</h1>
                <button onClick={this.props.onSpeak} className="btn btn-primary">
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