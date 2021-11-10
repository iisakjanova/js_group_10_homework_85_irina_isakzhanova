import {GET_ARTISTS_FAILURE, GET_ARTISTS_REQUEST, GET_ARTISTS_SUCCESS} from "../actions/artistsActions";

const initialState = {
    artists: null,
    fetchError: null,
    fetchLoading: null,
};

const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTISTS_REQUEST:
            return {...state, fetchLoading: true};
        case GET_ARTISTS_SUCCESS: {
            return {...state, fetchLoading: false, artists: action.payload};
        }
        case GET_ARTISTS_FAILURE:
            return {...state, fetchLoading: false, fetchError: action.payload};
        default:
            return state;
    }
};

export default artistsReducer;