import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {Grid, Typography} from "@material-ui/core";

import {getTrackHistory} from "../../store/actions/trackHistoryActions";
import TrackHistoryItem from "../../components/TrackHistoryItem/TrackHistoryItem";
import Preloader from "../../components/UI/Preloader/Preloader";

const TrackHistoryPage = ({history}) => {
    const dispatch = useDispatch();
    const trackHistory = useSelector(state => state.trackHistory.trackHistory);
    const loading = useSelector(state => state.trackHistory.fetchLoading);
    const user = useSelector(state => state.users.user);

    useEffect(() => {
        dispatch(getTrackHistory());
    }, [dispatch]);


    if (!user) {
        return <Redirect to={{
            pathname: "/login",
            state: {nextpath: history.location.pathname}
        }} />
    }

    let trackHistoryList = null;

    if (trackHistory && trackHistory.length > 0) {
        trackHistoryList = (
            <Grid item container direction="column" spacing={3}>
                {trackHistory.map(item => (
                    <TrackHistoryItem
                        key={item._id}
                        title={item.track.title}
                        artist={item.track.album.artist.title}
                        datetime={item.datetime}
                    />
                ))}
            </Grid>
        );
    }

    return (
        <div>
            <Preloader loading={loading} />
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Typography variant="h4">Track History</Typography>
                </Grid>
                {trackHistoryList || (
                    <Typography variant="h5">Nothing in your track history yet</Typography>
                )}
            </Grid>
        </div>
    );
};

export default TrackHistoryPage;