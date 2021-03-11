import { createStore } from 'redux';

const profiles = [
    {
        id: 1,
        name: 'Pradeep',
        skills: [
            {
                id: 1,
                text: 'React'
            }
        ]
    }
];

const initialState = { profiles };

const UPDATE = 'updateprofile';
const DELETE = 'deleteprofile';
const ADD = 'addprofile';
const LIST_PROFILE = 'listprofile';
const LIST_PROFILES = 'listprofiles';

const ADD_ACTION_CREATER = (profile) => ({ type: ADD, profile });
const UPDATE_ACTION_CREATER = (profile) => ({ type: UPDATE, profile });
const DELETE_ACTION_CREATER = (profile) => ({ type: DELETE, profile });
const LIST_PROFILE_ACTION_CREATER = (profile) => ({ type: LIST_PROFILE, profile });
const LIST_PROFILES_ACTION_CREATER = () => ({ type: LIST_PROFILES });



const UpdateProfile = (state = initialState, { type, profile }) => {
    let newState = state;
    switch (type) {
        case UPDATE:
            newState = {
                profiles: state.profiles.map((profileObj) => {
                    if (profileObj.id === profile.id) {
                        profileObj = profile;
                    }
                    return profileObj;
                })
            };
            break;
        case ADD:
            newState = {
                profiles: state.profiles.concat(profile)
            };
            break;
        case DELETE:
            newState = {
                profiles: state.profiles.filter((profileObj) => {
                    return profileObj.id !== profile.id;
                })
            };
            break;
        case LIST_PROFILE:
            newState = {
                profiles: state.profiles.filter((profileObj) => {
                    return profileObj.id === profile.id;
                })
            };
            break;
        case LIST_PROFILES:
            newState = {
                profiles: state.profiles
            };
            break;
        default:
            return newState;
    }

    return newState;
}

const store = createStore(UpdateProfile);

store.subscribe(() => {
    console.dir(store.getState());
})

console.log('Update Profile');
store.dispatch(UPDATE_ACTION_CREATER({
    id: 1,
    name: 'Pradeep',
    skills: [
        {
            id: 1,
            text: 'Angular4'
        },
        {
            id: 2,
            text: 'Angular6'
        }
    ]
}));

console.log('Add Profile');
store.dispatch(ADD_ACTION_CREATER({
    id: 2,
    name: 'Sandeep',
    skills: [
        {
            id: 1,
            text: 'Angular'
        },
        {
            id: 2,
            text: 'Angular2'
        }
    ]
}));

console.log('List Profile by Id');
store.dispatch(LIST_PROFILE_ACTION_CREATER({
    id: 2
}));

console.log('List Profiles');
store.dispatch(LIST_PROFILES_ACTION_CREATER());

console.log('Delete Profile');
store.dispatch(DELETE_ACTION_CREATER({
    id: 1
}));