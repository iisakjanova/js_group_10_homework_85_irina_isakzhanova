import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Grid} from "@material-ui/core";

import {getArtists} from "../../store/actions/artistsActions";
import Artist from "../../components/Artist/Artist";

const ArtistsList = () => {
    const dispatch = useDispatch();
    const artists = useSelector(state => state.artists.artists);

    useEffect(() => {
        dispatch(getArtists());
    }, [dispatch]);

    let artistsList = null;

    if (artists) {
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
            {artistsList}
        </>
    );
};

export default ArtistsList;