import {
    GET_ALBUMS_FAILURE,
    GET_ALBUMS_REQUEST,
    GET_ALBUMS_SUCCESS
} from "../actions/albumsActions";

const initialState = {
    albums: null,
    fetchError: null,
    fetchLoading: false,
};

const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALBUMS_REQUEST:
            return {...state, fetchLoading: true};
        case GET_ALBUMS_SUCCESS: {
            return {...state, fetchLoading: false, fetchError: null, albums: action.payload};
        }
        case GET_ALBUMS_FAILURE:
            return {...state, fetchLoading: false, fetchError: action.payload};
        default:
            return state;
    }
};

export default albumsReducer;