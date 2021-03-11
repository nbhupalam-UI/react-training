//reducer must return state

//Es 5
// function LikeReducer(like = 0, incrementLikeAction) {
//     return like;
// }
import { createStore } from 'redux';

const LIKE = 'LIKE';
const DISLIKE = 'DISLIKE';
const initialState = {
    like: 0,
    dislike: 0
}

//Reducer
const CommentReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case 'LIKE':
            newState = {
                ...state,
                like: state.like + 1
            };
            break;
        case 'DISLIKE':
            newState = {
                ...state,
                dislike: state.dislike + 1
            };
            break;
        default:
            return newState;
    }

    return newState;
}

//Action
const LIKE_ACTION = {
    'type': LIKE
}

const DISLIKE_ACTION = {
    'type': DISLIKE
}

//Dispatcher - provided by redux
//Dispatcher is middleware between action and reducer
// In Redux dispatcher is represented  via a function called dispatch which is instance method of 'Store' Object

//Create Store object
//import {CreateStore} from 'redux'

const store = createStore(CommentReducer);
//Event subscription
console.log(initialState);
store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch(LIKE_ACTION); // like = 1
store.dispatch(LIKE_ACTION); // like = 2
store.dispatch(LIKE_ACTION); // like = 3
store.dispatch(LIKE_ACTION); // like = 4
store.dispatch(LIKE_ACTION); // like = 5

store.dispatch(DISLIKE_ACTION);// dislike = 1
store.dispatch({
    type: DISLIKE
});


