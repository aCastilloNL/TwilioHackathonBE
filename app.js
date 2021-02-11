const express = require('express');
const app = express();
const cors = require('cors');

const Babysitter = require('./models/Babysitter');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require('./database/config');

app.get('/',cors(), (req, res) => {
  res.send('Hey Twillio');
});

app.post('/test', (req, res) => {
  console.log(req.body);
  res.sendStatus('200');
});

app.get('/babysitters',cors(), (req, res) => {
  Babysitter.find()
    .then((babysitters) => res.status('201').json(babysitters))
    .catch((error) => res.sendStatus('500'));
});

app.post('/babysitters',cors(), (req, res) => {
  const member = new Babysitter(req.body);
  console.log(req.body);
  member
    .save()
    .then((member) => res.status('201').json(babysitters))
    .catch((error) => res.sendStatus('500'));
});

module.exports = app;
