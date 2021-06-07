import * as ActionTypes from "./ActionTypes";


const default_state = {isLoading: true, errMess: null, leaders: []};

const Leaders = (state = default_state, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, errMess: null, leaders: action.payload};
        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, errMess: null, leaders: []};
        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, leaders: []};
        default:
            return state;
    }
};

export default Leaders;