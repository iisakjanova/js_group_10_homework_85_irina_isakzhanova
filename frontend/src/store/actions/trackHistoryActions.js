import axiosApi from "../../axiosApi";
import {toast} from "react-toastify";

export const ADD_TRACK_TO_TRACK_HISTORY_REQUEST = 'ADD_TRACK_TO_TRACK_HISTORY_REQUEST';
export const ADD_TRACK_TO_TRACK_HISTORY_SUCCESS = 'ADD_TRACK_TO_TRACK_HISTORY_SUCCESS';
export const ADD_TRACK_TO_TRACK_HISTORY_FAILURE = 'ADD_TRACK_TO_TRACK_HISTORY_FAILURE';

export const addTrackToTrackHistoryRequest = () => ({type: ADD_TRACK_TO_TRACK_HISTORY_REQUEST});
export const addTrackToTrackHistorySuccess = () => ({type: ADD_TRACK_TO_TRACK_HISTORY_SUCCESS});
export const addTrackToTrackHistoryFailure = () => ({type: ADD_TRACK_TO_TRACK_HISTORY_FAILURE});

export const GET_TRACK_HISTORY_REQUEST = 'GET_TRACK_HISTORY_REQUEST';
export const GET_TRACK_HISTORY_SUCCESS = 'GET_TRACK_HISTORY_SUCCESS';
export const GET_TRACK_HISTORY_FAILURE = 'GET_TRACK_HISTORY_FAILURE';

export const getTrackHistoryRequest = () => ({type: GET_TRACK_HISTORY_REQUEST});
export const getTrackHistorySuccess = (data) => ({type: GET_TRACK_HISTORY_SUCCESS, payload: data});
export const getTrackHistoryFailure = (error) => ({type: GET_TRACK_HISTORY_FAILURE, payload: error});

export const addTrackToTrackHistory = (id) => {
    return async (dispatch, getState) => {
        try {
            const headers = {
                'Authorization': getState().users.user && getState().users.user.token
            };

            dispatch(addTrackToTrackHistoryRequest());
            await axiosApi.post('/track_history', {track: id}, {headers});
            dispatch(addTrackToTrackHistorySuccess());
            toast.success('Track added to track history');
        } catch (error) {
            dispatch(addTrackToTrackHistoryFailure());
            toast.error('Something went wrong');
        }
    };
};

export const getTrackHistory = () => {
    return async (dispatch, getState) => {
        try {
            const headers = {
                'Authorization': getState().users.user && getState().users.user.token
            };

            dispatch(getTrackHistoryRequest());
            const response = await axiosApi.get('/track_history', {headers});
            dispatch(getTrackHistorySuccess(response.data));
        } catch (error) {
            dispatch(getTrackHistoryFailure(error.message));
            if (error.response.status === 401) {
                toast.warning('You need login!');
            } else {
                toast.error('Could not fetch track history!', {
                    theme: 'colored'
                });
            }
        }
    };
};