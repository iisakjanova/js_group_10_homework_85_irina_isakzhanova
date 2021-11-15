import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {Grid, Typography} from "@material-ui/core";

import {getTracks} from "../../store/actions/tracksActions";
import Track from "../../components/Track/Track";
import Preloader from "../../components/UI/Preloader/Preloader";
import {addTrackToTrackHistory} from "../../store/actions/trackHistoryActions";

const TracksList = ({match, history}) => {
    const dispatch = useDispatch();
    const id = match.params.album;

    const tracks = useSelector(state => state.tracks.tracks);
    const loading = useSelector(state => state.tracks.fetchLoading);
    const user = useSelector(state => state.users.user);

    useEffect(() => {
        dispatch(getTracks(id));
    }, [dispatch, id]);

    if (!user) {
        return <Redirect to={{
            pathname: "/login",
            state: {nextpath: history.location.pathname}
        }} />
    }

    const handleClickTrack = (id) => {
        dispatch(addTrackToTrackHistory(id));
    };

    let tracksList = null;

    if (tracks) {
        tracksList = (
            <Grid item container direction="column" spacing={3}>
                {tracks.map(track => (
                    <Track
                        key={track._id}
                        title={track.title}
                        number={track.number}
                        duration={track.duration}
                        onClick={() => handleClickTrack(track._id)}
                    />
                ))}
            </Grid>
        );
    }

    return (
        <>
            <Preloader loading={loading} />
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Typography variant="h4">
                        {tracks && tracks.length > 0 ? tracks[0].album.artist.title : null}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5">
                        {tracks && tracks.length > 0 ? tracks[0].album.title : null}
                    </Typography>
                </Grid>
                {tracksList}
            </Grid>
        </>

    );
};

export default TracksList;