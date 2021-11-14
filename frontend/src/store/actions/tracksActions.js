import axiosApi from "../../axiosApi";
import {toast} from "react-toastify";

export const GET_TRACKS_REQUEST = 'GET_TRACKS_REQUEST';
export const GET_TRACKS_SUCCESS = 'GET_TRACKS_SUCCESS';
export const GET_TRACKS_FAILURE = 'GET_TRACKS_FAILURE';

export const getTracksRequest = () => ({type: GET_TRACKS_REQUEST});
export const getTracksSuccess = tracks => ({type: GET_TRACKS_SUCCESS, payload: tracks});
export const getTracksFailure = error => ({type: GET_TRACKS_FAILURE, payload: error});

export const getTracks = (id) => {
    return async (dispatch, getState) => {
        try {
            const headers = {
                'Authorization': getState().users.user && getState().users.user.token
            };

            dispatch(getTracksRequest());
            const response = await axiosApi.get('/tracks?album=' + id, {headers});
            dispatch(getTracksSuccess(response.data));
        } catch (error) {
            dispatch(getTracksFailure(error.message));

            if (error.response.status === 401) {
                toast.warning('Login, please!');
            } else {
                toast.error('Could not fetch tracks!', {
                    theme: 'colored'
                });
            }


        }
    };
};
