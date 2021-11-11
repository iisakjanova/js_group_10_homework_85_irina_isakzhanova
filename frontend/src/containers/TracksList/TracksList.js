import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Grid, Typography} from "@material-ui/core";

import {getTracks} from "../../store/actions/tracksActions";
import Track from "../../components/Track/Track";

const TracksList = ({match}) => {
    const dispatch = useDispatch();
    const id = match.params.album;
    const tracks = useSelector(state => state.tracks.tracks);

    useEffect(() => {
        dispatch(getTracks(id));
    }, [dispatch, id]);

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
                    />
                ))}
            </Grid>
        );
    }
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Typography variant="h4">
                    {tracks ? tracks[0].album.artist.title : null}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5">
                    {tracks ? tracks[0].album.title : null}
                </Typography>
            </Grid>
            {tracksList}
        </Grid>
    );
};

export default TracksList;