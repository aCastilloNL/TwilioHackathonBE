const express = require('express');
const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 5000;

app.listen(port, err => {
    if(err) throw new Error('Something is not working, sorry :( ...')
    console.log(`Server is running amazingly on port ${port}`)
  })