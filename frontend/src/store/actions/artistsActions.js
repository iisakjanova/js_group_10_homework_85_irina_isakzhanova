import axiosApi from "../../axiosApi";
import {toast} from "react-toastify";

export const GET_ARTISTS_REQUEST = 'GET_ARTISTS_REQUEST';
export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS';
export const GET_ARTISTS_FAILURE = 'GET_ARTISTS_FAILURE';

export const getArtistsRequest = () => ({type: GET_ARTISTS_REQUEST});
export const getArtistsSuccess = artists => ({type: GET_ARTISTS_SUCCESS, payload: artists});
export const getArtistsFailure = error => ({type: GET_ARTISTS_FAILURE, payload: error});

export const getArtists = () => {
    return async dispatch => {
        try {
            dispatch(getArtistsRequest());
            const response = await axiosApi.get('/artists');
            dispatch(getArtistsSuccess(response.data));
        } catch (error) {
            dispatch(getArtistsFailure(error.message));
            toast.error('Could not fetch artists!', {
                theme: 'colored'
            });
        }
    };
};
