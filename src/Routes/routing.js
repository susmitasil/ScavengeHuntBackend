const express = require('express');
const routing = express.Router();

const scavengeController = require('../Controller/scavenge');
const insertController = require('../Controller/insertData');
const authController = require('../Controller/auth')


routing.post('/auth', authController.auth);
routing.get('/getbranchDetails', scavengeController.getBranchDetails);
routing.get('/insertDetails', insertController.insertData);
routing.post('/getDetailsCust', scavengeController.getDetailsCust); 
routing.all('*', scavengeController.invalid);
module.exports = routing;
