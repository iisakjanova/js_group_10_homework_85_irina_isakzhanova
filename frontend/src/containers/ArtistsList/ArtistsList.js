import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import {getArtists} from "../../store/actions/artistsActions";

const ArtistsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArtists());
    }, [dispatch]);

    return (
        <div>
         Artists
        </div>
    );
};

export default ArtistsList;