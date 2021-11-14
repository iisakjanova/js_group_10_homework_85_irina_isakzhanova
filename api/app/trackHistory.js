const express = require('express');
const {ObjectId} = require("mongodb");

const TrackHistory = require("../models/TrackHistory");
const auth = require("../middleware/auth");

const router = express.Router();

router.post('/', auth, async (req, res) => {
    if (!req.body.track) {
        return res.status(400).send('Data is not valid');
    }

    const trackHistoryData = {
        track: req.body.track,
        user: req.user._id,
    };

    const trackHistory = new TrackHistory(trackHistoryData);

    try {
        await trackHistory.generateDatetime();
        await trackHistory.save();
        res.send(trackHistory);
    } catch (e) {
        return res.status(400).send(e);
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const id = ObjectId(req.user._id);

        const trackHistory = await TrackHistory.aggregate([{$match: {user: id}}])
            .sort({datetime: -1});
        await TrackHistory.populate(trackHistory, {
            path: "track",
            select: "title album",
            populate: {
                path: "album",
                populate: {
                    path: "artist",
                    select: "title"
                }
            }
        });
        res.send(trackHistory);
    } catch (e) {
        res.sendStatus(500);
    }
});


module.exports = router;