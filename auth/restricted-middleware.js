const jwt = require('jsonwebtoken');

const secrets = require('../config/secrets.js');



module.exports = (req, res, next) => {
  const token = req.headers.token;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
      if(err) {
        res.status(401).json({message: 'Invalid token was given'});
      } else {
        req.user = {role: decodeToken.role, email: decodeToken.email} 
        next();
      }
    })
  } else {
    res.status(400).json({ message: 'No token provided' });
  }
};