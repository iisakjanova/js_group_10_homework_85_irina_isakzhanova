import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Grid, Typography} from "@material-ui/core";

import {getArtists} from "../../store/actions/artistsActions";
import Artist from "../../components/Artist/Artist";
import Preloader from "../../components/UI/Preloader/Preloader";

const ArtistsList = () => {
    const dispatch = useDispatch();
    const artists = useSelector(state => state.artists.artists);
    const loading = useSelector(state => state.artists.fetchLoading);

    useEffect(() => {
        dispatch(getArtists());
    }, [dispatch]);

    let artistsList = null;

    if (artists && artists.length > 0) {
        artistsList = (
            <Grid item container direction="row" spacing={3}>
                {artists.map(artist => (
                    <Artist
                        key={artist._id}
                        id={artist._id}
                        title={artist.title}
                        image={artist.image}
                    />
                ))}
            </Grid>
        );
    }

    return (
        <>
            <Preloader loading={loading} />
            {artistsList || <Typography variant="h5">No artists yet</Typography>}
        </>
    );
};

export default ArtistsList;