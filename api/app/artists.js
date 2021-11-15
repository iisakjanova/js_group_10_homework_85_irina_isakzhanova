const express = require('express');
const multer = require('multer');
const path = require('path');
const {nanoid} = require('nanoid');

const Artist = require('../models/Artist');
const config = require('../config');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const artists = await Artist.find();
        res.send(artists);
    } catch (e) {
        res.status(500).send({message: e.message});
    }
});

router.post('/', upload.single('image'), async (req, res) => {
    if (!req.body.title) {
        return res.status(400).send('Data is not valid');
    }

    const artistData = {
        title: req.body.title,
        info: req.body.info || null,
    };

    if (req.file) {
        artistData.image = req.file.filename;
    }

    const artist = new Artist(artistData);

    try {
        await artist.save();
        res.send(artist);
    } catch (e) {
        if (e.message.includes('duplicate key error')) {
            res.status(400).send('Duplicate key');
        }

        res.status(400).send({message: e.message});
    }
});

module.exports = router;