import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';


const LIKE = 'like';

const LikeReducer = (like = 0, action) => {
    switch (action.type) {
        case LIKE:
            return like + 1;
        default:
            return like;
    }
};

const store = createStore(LikeReducer);
const LIKE_ACTION = {
    type: LIKE
};

// function mapStateToProps(like) {
//     return {
//         //key: value
//         //react; reducx
//         //props: state
//         value: like
//     }
// }

const mapStateToProps = like => ({ like });

const mapDispatchToProps = dispatch => (
    {
        onLikeIncrement: () => dispatch(LIKE_ACTION)
    }
)

class LikeComponent extends Component {
    render() {
        return (
            <LikeDisplay {...this.props} />
        )
    }
}


const LikeDisplay = props => (
    <div>
        <h1>React Redux Application</h1>
        <p className="badge badge-secondary ml-2 mr-4">{props.like}</p>
        <button className="btn btn-primary" onClick={props.onLikeIncrement}>Increment</button>
    </div>
)

//create HOC - higher order component
const LikeHOC = connect(mapStateToProps, mapDispatchToProps)(LikeComponent);

const App = () => (
    <Provider store={store}>
        <LikeHOC />
    </Provider>
);

render(<App />, root);