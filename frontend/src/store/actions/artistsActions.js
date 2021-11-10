import axiosApi from "../../axiosApi";

export const GET_ARTISTS_REQUEST = 'GET_ARTISTS_REQUEST';
export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS';
export const GET_ARTISTS_FAILURE = 'GET_ARTISTS_FAILURE';

export const getArtistsRequest = () => ({type: GET_ARTISTS_REQUEST});
export const getArtistsSuccess = products => ({type: GET_ARTISTS_SUCCESS, payload: products});
export const getArtistsFailure = error => ({type: GET_ARTISTS_FAILURE, payload: error});

export const getArtists = () => {
    return async dispatch => {
        try {
            dispatch(getArtistsRequest());
            const response = await axiosApi.get('/artists');
            dispatch(getArtistsSuccess(response.data));
        } catch (error) {
            dispatch(getArtistsFailure(error.message));
        }
    };
};
