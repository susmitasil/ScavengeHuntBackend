const express = require('express');
const routing = express.Router();

const scavengeController = require('../Controller/scavenge');


routing.get('/getDetails', scavengeController.getBranchDetails);
routing.post('/notes', scavengeController.newNotes);
routing.all('*', scavengeController.invalid);
module.exports = routing;
