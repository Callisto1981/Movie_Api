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
app.get('/movies', function (req, res) {
  res.send('return all movies');
});

app.get('/movie/:title', function (req, res) {
  res.send('return movie with title: ' + req.params.title);
});

app.get('/genre/:name', function (req, res) {
  res.send('return movie with name: ' + req.params.name);
});

app.get('/director/:name', function (req, res) {
  res.send('return movie with directors name: ' + req.params.name);
});

app.get('/documentation', function (req, res) {
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/movies', function (req, res) {
  res.json(topMovies);
});

// Post requests
app.post('/create_user', function (req, res) {
  res.send('return new user\'s data: ' + JSON.stringify(req.body));
});

app.listen(8080);
