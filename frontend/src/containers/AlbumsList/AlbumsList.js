import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Grid, Typography} from "@material-ui/core";

import {getAlbums} from "../../store/actions/albumsActions";
import Album from "../../components/Album/Album";
import Preloader from "../../components/UI/Preloader/Preloader";

const AlbumsList = ({match}) => {
    const dispatch = useDispatch();
    const id = match.params.artist;

    const albums = useSelector(state => state.albums.albums);
    const loading = useSelector(state => state.albums.fetchLoading);

    useEffect(() => {
        dispatch(getAlbums(id));
    }, [dispatch, id]);

    let albumsList = null;

    if (albums) {
        albumsList = (
            <Grid item container direction="row" spacing={3}>
                {albums.map(album => (
                    <Album
                        key={album._id}
                        id={album._id}
                        title={album.title}
                        year={album.year}
                        image={album.image}
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
                        {albums && albums.length > 0 ? albums[0].artist.title : null}
                    </Typography>
                </Grid>
                {albumsList}
            </Grid>
        </>
    );
};

export default AlbumsList;