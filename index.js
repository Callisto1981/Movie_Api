const express = require('express');
const app = express();
const morgan = require('morgan');

// Middleware

app.use(express.static('public'));
app.use(morgan('common'));
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});

// GET requests
app.get('/', function (req, res) {
  res.send('Welcome to my movie selections!');
});

app.get('/documentation', function (req, res) {
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/movies', function (req, res) {
  res.json(topMovies);
});
