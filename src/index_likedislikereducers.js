import { createStore, combineReducers } from 'redux';

const LIKE = 'like';
const DISLIKE = 'dislike';

const LikeReducer = (like = 0, action) => {
    switch (action.type) {
        case LIKE:
            return like + 1;
        default:
            return like;
    }
}

const DislikeReducer = (dislike = 0, action) => {
    switch (action.type) {
        case DISLIKE:
            return dislike + 1;
        default:
            return dislike;
    }
}

//Combine reducers
const appReducer = combineReducers({
    LikeReducer,
    DislikeReducer

});
const store = createStore(appReducer);
store.subscribe(() => {
    console.log('Like', store.getState().LikeReducer);
    console.log('Dislike', store.getState().DislikeReducer);
});

store.dispatch({type: LIKE});
store.dispatch({type: DISLIKE});