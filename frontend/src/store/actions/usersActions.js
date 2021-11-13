import axiosApi from "../../axiosApi";
import {historyReplace} from "./historyActions";
import {toast} from "react-toastify";

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const registerUserRequest = () => ({type: REGISTER_USER_REQUEST});
export const registerUserSuccess = user => ({type: REGISTER_USER_SUCCESS, payload: user});
export const registerUserFailure = error => ({type: REGISTER_USER_FAILURE, payload: error});

export const registerUser = userData => {
    return async dispatch => {
        try {
            dispatch(registerUserRequest());
            const response = await axiosApi.post('/users', userData);
            dispatch(registerUserSuccess(response.data));
            dispatch(historyReplace('/'));
            toast.success('Registration is successful');
        } catch (error) {
            if (error.response && error.response.data) {
                dispatch(registerUserFailure(error.response.data));
            } else {
                if (error.response && error.response.data) {
                    dispatch(registerUserFailure(error.response.data));
                } else {
                    dispatch(registerUserFailure({global: 'No internet'}));
                }
            }
        }
    };
};
