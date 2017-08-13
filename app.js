"use strict";
const config = require('./config/config.json')
const express = require('express');
const app = express();
const twilio = require('twilio');
const client = require('twilio')(config.twilio.accountSid, config.twilio.authToken);
const bodyParser = require('body-parser');
const global = Date.now();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function(req, res, next) {
  // Website you wish to allow to connect // for some reasone my localhost origin is null
  res.setHeader('Access-Control-Allow-Origin', 'null');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

// variable to hold values used to create dots
var dots = [];

// request to get array holding all dots
app.get('/dots', function (req, res) {
  res.send(dots);
});

// first api node - in case you want to test other numbers
app.post('/api/:id', function (req, res) {
  var num = req.params.id;
  dots.unshift(num);
  console.log(dots);
  res.send(dots);
});

app.post('/kill', function (req, res) {
  res.sendStatus(200);
  dots = [];
});

app.post('/twilio', function (req, res) {
    res.sendStatus(200);
    let self = req.body;
  	var allLower = self.Body.toLowerCase();
    console.log('text msg body: ',self.Body);
    console.log('from #: ', self.From);

    // push phone number of txt to array 'dots'
    dots.unshift(self.From);
    //debug mode - full json body and time stamp
  	// console.log("JSON Body of Twilio request\n" , self);
  	// console.log('Time:', Date.now());
});

app.get('/serverStatus/:id', function(req, res) {
    res.send("Server has been running for " + ((Date.now() - global).toString()) + " miliseconds. And you typed: " + req.params.id);
});

app.get('/all', function(req, res) {
    res.send(dots); // return the list of active sesisons
});

app.listen(3000, function () {
  console.log('dots-on-map : listening on port 3000');
	});
