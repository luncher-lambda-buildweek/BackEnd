const express = require('express');
const router = express.Router();
const restricted = require('./restricted-middleware');
const Schools = require('../helpers/schools/schoolsModel');

router.get('/', (req, res) => {
    Schools.getItems()
    .then(schools => {
        res.status(200).json(schools);
    })
    .catch(err => {
        res.status(500).json({ err, message: "Could not retrieve schools" });
    })
});

router.get('/:id', async (req, res) => {
    try {
        let item = await Schools.getSchool(req.params.id)
        if (!school) { 
            res.status(404).json({ error: "School does not exist" });
        } else {
            res.status(200).json(school);
        }
    } catch(error) {
        res.status(500).json({ error, message: "Unable to get school" });
    }
});


module.exports = router;
