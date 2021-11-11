import axiosApi from "../../axiosApi";

export const GET_TRACKS_REQUEST = 'GET_TRACKS_REQUEST';
export const GET_TRACKS_SUCCESS = 'GET_TRACKS_SUCCESS';
export const GET_TRACKS_FAILURE = 'GET_TRACKS_FAILURE';

export const getTracksRequest = () => ({type: GET_TRACKS_REQUEST});
export const getTracksSuccess = products => ({type: GET_TRACKS_SUCCESS, payload: products});
export const getTracksFailure = error => ({type: GET_TRACKS_FAILURE, payload: error});

export const getTracks = (id) => {
    return async dispatch => {
        try {
            dispatch(getTracksRequest());
            const response = await axiosApi.get('/tracks?album=' + id);
            dispatch(getTracksSuccess(response.data));
        } catch (error) {
            dispatch(getTracksFailure(error.message));
        }
    };
};
