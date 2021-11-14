import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getTrackHistory} from "../../store/actions/trackHistoryActions";

const TrackHistoryPage = () => {
    const dispatch = useDispatch();
    const trackHistory = useSelector(state => state.trackHistory.trackHistory);
    const loading = useSelector(state => state.trackHistory.fetchLoading);

    useEffect(() => {
        dispatch(getTrackHistory());
    }, [dispatch]);
    return (
        <div>
           Track History
        </div>
    );
};

export default TrackHistoryPage;