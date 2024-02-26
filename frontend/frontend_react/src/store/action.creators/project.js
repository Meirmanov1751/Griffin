import {
    FETCH_PROJECT_SUCCESS,
    FETCH_PROJECT_FAILURE,
    FETCH_PROJECT_REQUEST
} from './../const';
import instance from "../api";

export const fetchProjectRequest = () => ({
    type: FETCH_PROJECT_REQUEST,
});

export const fetchProjectSuccess = (order) => ({

    type: FETCH_PROJECT_SUCCESS,
    payload: order,
});

export const fetchProjectFailure = (error) => ({
    type: FETCH_PROJECT_FAILURE,
    payload: error,
});

export const fetchProject = () => async (dispatch) => {
    dispatch(fetchProjectRequest());

    try {
        const response = await instance.get(`/api/project/project/`);
        // const data = await response.json();
        // console.log(data)

        dispatch(fetchProjectSuccess(response.data.results));

    } catch (error) {
        if (error.response && error.response.status === 401) {
            // window.location.href = '/login';
        } else {
            console.log('Произошла ошибка:', error.message);
        }
        dispatch(fetchProjectFailure(error));
    }
};