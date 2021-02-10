const express = require('express');
const app = express();

const Babysitter = require('./models/Member');

app.use(express.urlencoded({extended:false}))
app.use(express.json())

require('./database/config');

app.get('/', (req, res) => {
    res.send('Hey Twillio');
})

app.get('/members', (req, res) => {
    Babysitter.find()
    .then((members) => res.status('201').json(members))
    .catch((error) => res.sendStatus('500'));
})



app.post('/members', (req, res) => {
    const member = new Babysitter(req.body);
    console.log(req.body);
    member
    .save()
    .then((member) => res.status('201').json(member))
    .catch((error) => res.sendStatus('500'));
})

module.exports = app;
