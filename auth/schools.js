const express = require('express');
const router = express.Router();
const restricted = require('./restricted-middleware');
const Schools = require('../helpers/schoolsModel');
const Users = require('../helpers/usersModel')

router.get('/', (req, res) => {
    Schools.getSchools()
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
        const email = req.user.email
        const user = await Users.findBy({email})
        const attributes = {...req.body, user_id: user.id}
        let school = await Schools.addSchool(attributes);
        console.log(attributes)
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

router.post('/:id/donate', async (req, res) => {
    try {
        const school = await Schools.getSchool(req.params.id)
        const newFunds = req.body.amountDonated + school.currentFunds //parseInt
        const changes = {currentFunds: newFunds}
        const amountDonated = await Schools.updateSchool(school.id, changes)
        if (school) {
            res.status(202).json({message: "The donation has been made!", changes})
        } else {
            res.status(404).json({error: "Could not find school"})
        }
    } catch (err) {
        res.status(500).json({error: "Unable to update donations"})
    }
}) 


module.exports = router;
