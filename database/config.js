const mongoose = require('mongoose');
require('dotenv').config();
const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('connected to db'))
  .catch(() => console.log('error connecting to db'));


  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('we are connected!')
  });