const router = require('express').Router();

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken')

const secrets = require('../config/secrets')

const Users = require('../helpers/usersModel')


router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); 
    user.password = hash;

    Users.add(user)
        .then(saved => {
            const token = generateToken(user)
            res.status(201).json({message: `You are registered as ${user.email}!`, token, id: user.id, role: user.role});
                
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/login', (req, res) => {
    let { email, password } = req.body;

    Users.findBy({ email })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.email}!`, token, id: user.id, role: user.role,
                    token
                });
            } else {
                res.status(401).json({ message: 'Unauthorized credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

function generateToken(user) {
    const payload = {
        id: user.id, 
        email: user.email,
        role: user.role
    };

    const options = {
        expiresIn: '1d',

    }


    return jwt.sign(payload, secrets.jwtSecret, options)

}

module.exports = router;