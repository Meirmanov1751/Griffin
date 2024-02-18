import { combineReducers } from 'redux';
import {
    FETCH_COMPANY_SUCCESS,
    FETCH_COMPANY_REQUEST,
    FETCH_COMPANY_FAILURE
} from './../const';

const items = (state = [], action) => {
    switch (action.type) {
        case FETCH_COMPANY_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case FETCH_COMPANY_REQUEST:
            return true;
        case FETCH_COMPANY_SUCCESS:
        case FETCH_COMPANY_FAILURE:
            return false;
        default:
            return state;
    }
};

const error = (state = null, action) => {
    switch (action.type) {
        case FETCH_COMPANY_FAILURE:
            return action.payload;
        case FETCH_COMPANY_REQUEST:
        case FETCH_COMPANY_SUCCESS:
            return () => {};
        default:
            return state;
    }
};

export default combineReducers({
    items,
    isFetching,
    error,
});