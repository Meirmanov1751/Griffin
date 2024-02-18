import {
    FETCH_COMPANY_SUCCESS,
    FETCH_COMPANY_REQUEST,
    FETCH_COMPANY_FAILURE
} from './../const';
import instance from "../api";

export const fetchCompanyRequest = () => ({
    type: FETCH_COMPANY_REQUEST,
});

export const fetchCompanySuccess = (сompany) => ({

    type: FETCH_COMPANY_SUCCESS,
    payload: сompany,
});

export const fetchCompanyFailure = (error) => ({
    type: FETCH_COMPANY_FAILURE,
    payload: error,
});

export const fetchCompany = () => async (dispatch) => {
    dispatch(fetchCompanyRequest());

    try {
        const response = await instance.get(`/api/company/company/`);
        // const data = await response.json();
        // console.log(data)

        dispatch(fetchCompanySuccess(response.data.results));
    } catch (error) {
        dispatch(fetchCompanyFailure(error));
    }
};