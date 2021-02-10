const express = require('express');
const app = express();

const Member = require('./models/Member');

app.use(express.urlencoded({extended:false}))
app.use(express.json())

require('./database/config');

app.get('/', (req, res) => {
    res.send('Hey Twillio');
})

app.get('/members', (req, res) => {
    Member.find()
    .then((members) => res.status('201').json(members))
    .catch((error) => res.sendStatus('500'));
})

app.post('/members', (req, res) => {
    const member = new Member(req.body);
    console.log(req.body);
    member
    .save()
    .then((member) => res.status('201').json(member))
    .catch((error) => res.sendStatus('500'));
})

module.exports = app;
