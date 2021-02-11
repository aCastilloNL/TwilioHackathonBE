const express = require('express');
const app = express();

const Babysitter = require('./models/Babysitter');

app.use(express.urlencoded({extended:false}))
app.use(express.json())

require('./database/config');

app.get('/', (req, res) => {
    res.send('Hey Twillio');
})

app.get('/babysitters', (req, res) => {
    Babysitter.find()
    .then((members) => res.status('201').json(babysitters))
    .catch((error) => res.sendStatus('500'));
})



app.post('/babysitters', (req, res) => {
    const member = new Babysitter(req.body);
    console.log(req.body);
    member
    .save()
    .then((member) => res.status('201').json(babysitters))
    .catch((error) => res.sendStatus('500'));
})

module.exports = app;
