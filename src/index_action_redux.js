import { createStore } from 'redux';

const initialState = {
    city: 'HYD'
};

const UPDATE = 'updateprofile';

const UPDATE_ACTION = {
    type: UPDATE,
    city: 'Hyderabad'
}


const UpdateProfile = (state = initialState, { type, city }) => {
    switch (type) {
        case UPDATE:
            return {
                ...state,
                city
            };
            break;
        default:
            return state;
    }
}

const store = createStore(UpdateProfile);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(UPDATE_ACTION);