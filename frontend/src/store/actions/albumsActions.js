import axiosApi from "../../axiosApi";

export const GET_ALBUMS_REQUEST = 'GET_ALBUMS_REQUEST';
export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS';
export const GET_ALBUMS_FAILURE = 'GET_ALBUMS_FAILURE';

export const getAlbumsRequest = () => ({type: GET_ALBUMS_REQUEST});
export const getAlbumsSuccess = products => ({type: GET_ALBUMS_SUCCESS, payload: products});
export const getAlbumsFailure = error => ({type: GET_ALBUMS_FAILURE, payload: error});

export const getAlbums = (params) => {
    return async dispatch => {
        try {
            dispatch(getAlbumsRequest());
            const response = await axiosApi.get('/albums' + params);
            dispatch(getAlbumsSuccess(response.data));
        } catch (error) {
            dispatch(getAlbumsFailure(error.message));
        }
    };
};
