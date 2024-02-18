import { combineReducers } from 'redux';
import {
    FETCH_PROJECT_SUCCESS,
    FETCH_PROJECT_FAILURE,
    FETCH_PROJECT_REQUEST
} from './../const';

const items = (state = [], action) => {
    switch (action.type) {
        case FETCH_PROJECT_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case FETCH_PROJECT_REQUEST:
            return true;
        case FETCH_PROJECT_SUCCESS:
        case FETCH_PROJECT_FAILURE:
            return false;
        default:
            return state;
    }
};

const error = (state = null, action) => {
    switch (action.type) {
        case FETCH_PROJECT_FAILURE:
            return action.payload;
        case FETCH_PROJECT_REQUEST:
        case FETCH_PROJECT_SUCCESS:
            return () => {}
        default:
            return state;
    }
};

export default combineReducers({
    items,
    isFetching,
    error,
});