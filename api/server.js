const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router');
const schools = require('../auth/schools')


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', authRouter);
server.use('/api/schools', schools)



server.get('/', (req, res) => {
  res.status(200).json({api: "It's working!"});
});

module.exports = server;
