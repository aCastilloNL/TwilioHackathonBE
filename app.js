const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./database/config');

const NodeGeocoder = require('node-geocoder');
const options = {
  provider: 'openstreetmap',
};
const geoCoder = NodeGeocoder(options);

const Babysitter = require('./models/Babysitter');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', cors(), (req, res) => {
  res.send('Hey Twillio');
});

app.post('/location/check', (req, res) => {
  const location = req.body.location;
  geoCoder
    .geocode(location)
    .then((result) => {
      if (!result || result.length === 0) {
        res.sendStatus('404');
      } else {
        res.status('200').json(result[0]);
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus('500');
    });
});

app.post('/babysitters/find', (req, res) => {
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;

  Babysitter.findOne({
    'address.location': {
      $nearSphere: {
        $geometry: {
          type: 'Point',
          coordinates: [latitude, longitude],
        },
        $maxDistance: 10000,
      },
    },
  })
    .then((babysitter) => {
      if (babysitter) {
        res.status('200').json(babysitter);
      } else {
        res.sendStatus('404');
      }
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus('500');
    });
});

app.get('/babysitters', cors(), (req, res) => {
  Babysitter.find()
    .then((babysitters) => res.status('200').json(babysitters))
    .catch((error) => res.sendStatus('500'));
});

app.post('/babysitters', cors(), (req, res) => {
  let data = req.body;
  geoCoder
    .geocode(
      `${data.address.city} ${data.address.street} ${data.address.number}`
    )
    .then((result) => {
      if (!result || result.length === 0) {
        res.status('400').json({ message: 'Invalid Address' });
      } else {
        data.address['location'] = {
          type: 'Point',
          coordinates: [result[0].latitude, result[0].longitude],
        };
        const babysitter = new Babysitter(data);
        babysitter
          .save()
          .then((savedBabysitter) => res.status('201').json(savedBabysitter))
          .catch((error) => {
            console.log(error);
            res.sendStatus('500');
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus('500');
    });
});

module.exports = app;
