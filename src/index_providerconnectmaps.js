import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';
import './App.css';


const LIKE = 'like';
const DISLIKE = 'dislike';

const LikeReducer = (like = 0, action) => {
    switch (action.type) {
        case LIKE:
            return like + 1;
        default:
            return like;
    }
};

const DislikeReducer = (dislike = 0, action) => {
    switch (action.type) {
        case DISLIKE:
            return dislike + 1;
        default:
            return dislike;
    }
};

const appReducer = combineReducers({
    LikeReducer,
    DislikeReducer
});

const store = createStore(appReducer);
const LIKE_ACTION = {
    type: LIKE
};

const DISLIKE_ACTION = {
    type: DISLIKE
};

// const mapLikeStateToProps = state => ({ like: state.LikeReducer });

const mapLikeStateToProps = state => {
    return (
        {
            like: state.LikeReducer
        }
    )
};

const mapLikeDispatchToProps = dispatch => (
    {
        onLikeIncrement: () => dispatch(LIKE_ACTION)
    }
)

const mapDislikeStateToProps = state => ({ dislike: state.DislikeReducer });

const mapDislikeDispatchToProps = dispatch => (
    {
        onDislikeIncrement: () => dispatch(DISLIKE_ACTION)
    }
)

class LikeComponent extends Component {
    render() {
        return (
            <LikeDisplay {...this.props} />
        )
    }
}

class DislikeComponent extends Component {
    render() {
        return (
            <DislikeDisplay {...this.props} />
        )
    }
}


const LikeDisplay = props => (
    <div>

        <p className="badge badge-secondary ml-2 mr-4">{props.like}</p>
        <button className="btn btn-primary" onClick={props.onLikeIncrement}>Like</button>
    </div>
)

const DislikeDisplay = props => (
    <div>
        <p className="badge badge-secondary ml-2 mr-4">{props.dislike}</p>
        <button className="btn btn-primary" onClick={props.onDislikeIncrement}>Dislike</button>
    </div>
)

//create HOC - higher order component
const LikeHOC = connect(mapLikeStateToProps, mapLikeDispatchToProps)(LikeComponent);

const DislikeHOC = connect(mapDislikeStateToProps, mapDislikeDispatchToProps)(DislikeComponent);

const LikeApp = () => (
    <Provider store={store}>
        <LikeHOC />
    </Provider>
);

const DislikeApp = () => (
    <Provider store={store}>
        <DislikeHOC />
    </Provider>
);

const App = () => (
    <div className="container">
        <h1>React Application</h1>
        <LikeApp />
        <DislikeApp />
    </div>
)


render(<App />, root);