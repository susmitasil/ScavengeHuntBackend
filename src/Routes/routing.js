const express = require('express');
const routing = express.Router();

const scavengeController = require('../Controller/scavenge');
const insertController = require('../Controller/insertData');


routing.get('/getDetails', scavengeController.getBranchDetails);
routing.get('/insertDetails', insertController.insertData);
routing.post('/getbranchDetails', scavengeController.getDetailsUser); 
routing.all('*', scavengeController.invalid);
module.exports = routing;
