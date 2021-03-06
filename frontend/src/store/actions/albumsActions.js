import axiosApi from "../../axiosApi";
import {toast} from "react-toastify";

export const GET_ALBUMS_REQUEST = 'GET_ALBUMS_REQUEST';
export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS';
export const GET_ALBUMS_FAILURE = 'GET_ALBUMS_FAILURE';

export const getAlbumsRequest = () => ({type: GET_ALBUMS_REQUEST});
export const getAlbumsSuccess = albums => ({type: GET_ALBUMS_SUCCESS, payload: albums});
export const getAlbumsFailure = error => ({type: GET_ALBUMS_FAILURE, payload: error});

export const getAlbums = (id) => {
    return async dispatch => {
        try {
            dispatch(getAlbumsRequest());
            const response = await axiosApi.get('/albums?artist=' + id);
            dispatch(getAlbumsSuccess(response.data));
        } catch (error) {
            if (error.response && error.response.data) {
                dispatch(getAlbumsFailure(error.response?.data.message));
                toast.error('Could not fetch albums!', {
                    theme: 'colored'
                });
            } else {
                dispatch(getAlbumsFailure('No internet!'));
                toast.error('No internet!', {
                    theme: 'colored'
                });
            }
        }
    };
};
