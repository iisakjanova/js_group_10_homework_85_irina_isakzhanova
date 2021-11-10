const express = require('express');
const {ObjectId} = require("mongodb");

const Track = require("../models/Track");

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const query = {};

        if (req.query.album) {
            query.album = ObjectId(req.query.album);
        }

        let tracks;

        if (req.query.artist) {
            const tracksArtist = await Track.find().populate({
                path: 'album',
                match: {
                    artist: req.query.artist
                },
                populate: {
                    path: 'artist'
                }
            });

            tracks = tracksArtist.filter(item => item.album !== null);
            return res.send(tracks);
        }

        tracks = await Track.aggregate([{$match: query}]).sort({number: 1});
        res.send(tracks);
    } catch (e) {
        return res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    if (!req.body.number || !req.body.title || !req.body.album) {
        return res.status(400).send('Data is not valid');
    }

    const trackData = {
        number: req.body.number,
        title: req.body.title,
        album: req.body.album,
        duration: req.body.duration || null,
    };

    const track = new Track(trackData);

    try {
        await track.save();
        res.send(track);
    } catch (e) {
        return res.status(400).send(e);
    }
});

module.exports = router;