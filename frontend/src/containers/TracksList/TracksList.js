import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Redirect, useLocation} from "react-router-dom";
import {Grid, Typography} from "@material-ui/core";

import {getTracks} from "../../store/actions/tracksActions";
import Track from "../../components/Track/Track";
import Preloader from "../../components/UI/Preloader/Preloader";
import {addTrackToTrackHistory} from "../../store/actions/trackHistoryActions";

const useQuery = () => {
    const {search} = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
};

const TracksList = ({history}) => {
    const dispatch = useDispatch();

    let query = useQuery();
    const id = query.get('album');

    const tracks = useSelector(state => state.tracks.tracks);
    const loading = useSelector(state => state.tracks.fetchLoading);
    const user = useSelector(state => state.users.user);

    useEffect(() => {
        dispatch(getTracks(id));
    }, [dispatch, id]);

    if (!user) {
        const path = history.location.pathname + history.location.search;

        return <Redirect to={{
            pathname: "/login",
            state: {nextpath: path}
        }} />
    }

    const handleClickTrack = (id) => {
        dispatch(addTrackToTrackHistory(id));
    };

    let tracksList = null;

    if (tracks && tracks.length > 0) {
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
                {tracksList || <Typography variant="h5">No tracks yet</Typography>}
            </Grid>
        </>
    );
};

export default TracksList;