import axiosApi from "../../axiosApi";
import {toast} from "react-toastify";

export const ADD_TRACK_TO_TRACK_HISTORY_REQUEST = 'ADD_TRACK_TO_TRACK_HISTORY_REQUEST';
export const ADD_TRACK_TO_TRACK_HISTORY_SUCCESS = 'ADD_TRACK_TO_TRACK_HISTORY_SUCCESS';
export const ADD_TRACK_TO_TRACK_HISTORY_FAILURE = 'ADD_TRACK_TO_TRACK_HISTORY_FAILURE';

export const addTrackToTrackHistoryRequest = () => ({type: ADD_TRACK_TO_TRACK_HISTORY_REQUEST});
export const addTrackToTrackHistorySuccess = () => ({type: ADD_TRACK_TO_TRACK_HISTORY_SUCCESS});
export const addTrackToTrackHistoryFailure = () => ({type: ADD_TRACK_TO_TRACK_HISTORY_FAILURE});

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
