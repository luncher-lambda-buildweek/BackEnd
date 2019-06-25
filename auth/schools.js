const express = require('express');
const router = express.Router();
const restricted = require('./restricted-middleware');
const Schools = require('../helpers/schoolsModel');

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
        let school = await Schools.getSchool(req.params.id)
        if (!school) { 
            res.status(404).json({ error: "School does not exist" });
        } else {
            res.status(200).json(school);
        }
    } catch(error) {
        res.status(500).json({ error, message: "Unable to get school" });
    }
});

router.post('/', restricted, async (req, res) => {
    try {
        let school = await Schools.addschool(req.body);
        res.status(201).json({ message: "School has been added", school });
        } catch (error) {
         res.status(500).json({ error, message: "Please provide info for schoolName, location, and fundsNeeded" });
    }
});

router.put('/:id', restricted, async (req, res) => {
    try {
        let school = await Schools.updateSchool(req.params.id, req.body);
        let changes = await Schools.getSchool(req.params.id);
        if (!school) {
            res.status(404).json({ error: "School does not exist" });
        } else {
            res.status(202).json({ message: "The following updates have been made:", changes });
        } 
    } catch (err) {
        res.status(500).json({ error: "Unable to update the school" });
    }
});

router.delete('/:id', restricted, async (req, res) => {
    try {
        let school = await Schools.removeSchool(req.params.id, req.body);
        const schoolName = req.body.schoolName;
        if (!school) {
            res.status(404).json({ error: "School does not exist" });
        } else {
            res.status(202).json({ message: "The following school listing was removed:", schoolName });
        } 
    } catch (err) {
        res.status(500).json({ error: "Unable to delete school" });
     }
});


module.exports = router;
