import {
    GET_TRACKS_REQUEST,
    GET_TRACKS_SUCCESS,
    GET_TRACKS_FAILURE
} from "../actions/tracksActions";

const initialState = {
    tracks: null,
    fetchError: null,
    fetchLoading: false,
};

const tracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRACKS_REQUEST:
            return {...state, fetchLoading: true};
        case GET_TRACKS_SUCCESS: {
            return {...state, fetchLoading: false, fetchError: null, tracks: action.payload};
        }
        case GET_TRACKS_FAILURE:
            return {...state, fetchLoading: false, fetchError: action.payload};
        default:
            return state;
    }
};

export default tracksReducer;