const router = require('express').Router();

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken')

const secrets = require('../config/secrets')

const Users = require('../helpers/users.model')


router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); 
    user.password = hash;

    Users.add(user)
        .then(saved => {
            const token = generateToken(user)
            res.status(201).json({token});
                
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
                    message: `Welcome ${user.email}!`, token, id: user.id,
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
        subject: user.id, 
        email: user.email,
        role: user.role
    };

    const options = {
        expiresIn: '1d',

    }


    return jwt.sign(payload, secrets.jwtSecret, options)

}

module.exports = router;