const express = require('express');

const games = require('../router/game-router.js')

const server = express();
server.use(express.json());

server.use('/games', games)

server.get('/', (req,res) => {
    res.send('Sprints are stressful');
});

module.exports = server;