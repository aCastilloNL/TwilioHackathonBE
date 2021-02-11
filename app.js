const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./database/config');

const Babysitter = require('./models/Babysitter');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', cors(), (req, res) => {
  res.send('Hey Twillio');
});

app.post('/babysitters/find', (req, res) => {
  const location = req.body.location;
  console.log(location);

  //instead of getting first babysitter should find babysitter nearest to the location
  Babysitter.findOne()
    .then((babysitter) => res.status('200').json(babysitter))
    .catch((error) => res.sendStatus('500'));
});

app.get('/babysitters', cors(), (req, res) => {
  Babysitter.find()
    .then((babysitters) => res.status('201').json(babysitters))
    .catch((error) => res.sendStatus('500'));
});

app.post('/babysitters', cors(), (req, res) => {
  const member = new Babysitter(req.body);
  console.log(req.body);
  member
    .save()
    .then((member) => res.status('201').json(babysitters))
    .catch((error) => res.sendStatus('500'));
});

module.exports = app;
