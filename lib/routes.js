var express = require('express');
var ServiceRoutes = express.Router();
var dashServer = require('./dashServer');

ServiceRoutes.get('/', function (req, res) {
    try {
        res.render('' + dashServer.render());
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = ServiceRoutes;