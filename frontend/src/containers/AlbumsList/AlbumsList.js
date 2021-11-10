import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import {getAlbums} from "../../store/actions/albumsActions";

const AlbumsList = ({location}) => {
    const dispatch = useDispatch();
    const searchParams = location.search;

    useEffect(() => {
        dispatch(getAlbums(searchParams));
    }, [dispatch, searchParams]);
    return (
        <div>
            Albums
        </div>
    );
};

export default AlbumsList;