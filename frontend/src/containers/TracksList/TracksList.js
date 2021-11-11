import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import {getTracks} from "../../store/actions/tracksActions";

const TracksList = ({match}) => {
    const dispatch = useDispatch();
    const id = match.params.album;

    useEffect(() => {
        dispatch(getTracks(id));
    }, [dispatch, id]);

    return (
        <div>
            Tracks
        </div>
    );
};

export default TracksList;