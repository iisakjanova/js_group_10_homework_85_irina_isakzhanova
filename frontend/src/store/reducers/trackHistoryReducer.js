import {
    GET_TRACK_HISTORY_FAILURE,
    GET_TRACK_HISTORY_REQUEST,
    GET_TRACK_HISTORY_SUCCESS
} from "../actions/trackHistoryActions";

const initialState = {
    tracksHistory: null,
    fetchError: null,
    fetchLoading: null,
};

const trackHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRACK_HISTORY_REQUEST:
            return {...state, fetchLoading: true};
        case GET_TRACK_HISTORY_SUCCESS: {
            return {...state, fetchLoading: false, tracksHistory: action.payload};
        }
        case GET_TRACK_HISTORY_FAILURE:
            return {...state, fetchLoading: false, fetchError: action.payload};
        default:
            return state;
    }
};

export default trackHistoryReducer;