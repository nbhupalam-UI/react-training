import { createStore } from 'redux';

const initialState = {
    city: 'HYD'
};

const UPDATE = 'updateprofile';

const UPDATE_ACTION_CREATER = (city) => ({type: UPDATE, city})


const UpdateProfile = (state = initialState, { type, city }) => {
    let newState = state;
    switch (type) {
        case UPDATE:
        newState = Object.assign({}, state, {city});
            break;
        default:
            return state;
    }
    return newState;
}

const store = createStore(UpdateProfile);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(UPDATE_ACTION_CREATER('Banglore'));