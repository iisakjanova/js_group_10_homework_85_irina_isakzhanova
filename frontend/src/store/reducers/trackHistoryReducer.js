import {
    GET_TRACK_HISTORY_FAILURE,
    GET_TRACK_HISTORY_REQUEST,
    GET_TRACK_HISTORY_SUCCESS
} from "../actions/trackHistoryActions";

const initialState = {
    trackHistory: null,
    fetchError: null,
    fetchLoading: false,
};

const trackHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRACK_HISTORY_REQUEST:
            return {...state, fetchLoading: true};
        case GET_TRACK_HISTORY_SUCCESS: {
            return {...state, fetchLoading: false, fetchError: null, trackHistory: action.payload};
        }
        case GET_TRACK_HISTORY_FAILURE:
            return {...state, fetchLoading: false, fetchError: action.payload};
        default:
            return state;
    }
};

export default trackHistoryReducer;